const mongoose = require('mongoose')
const argon2 = require('argon2')
const ObjectId = mongoose.Schema.Types.ObjectId;


const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: 3, max: 50
        },
        email: {
            type: String,
            lowercase: true,
            validate: {
                validator: function (e) {
                    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return reg.test(e);
                },
                message: '{VALUE} is not a valid email!'
            },
            unique: [true, 'email must be unique'],
            required: [true, "email is required"]
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false
        },
        role: {
            type: String,
            enum: ['Member', 'Editor', 'Admin'],
            default: 'Member'
        },

        active: { type: Boolean, default: true },
        deletedAt: { type: Date, default: null }
    },
    { timestamps: true }
);

UserSchema.pre('save', async function (next) {

    let hash = '';

    if (this.isModified('password') || this.isNew) {
        try {
            hash = await argon2.hash(this.password, await argon2.generateSalt());
            this.password = hash;
            next();
        } catch (error) {
            next(error)
        }

    }
});

// compare password input to password saved in database
UserSchema.methods.comparePassword = function (pw) {
    return new Promise((resolve, reject) => {
        argon2.verify(this.password, pw).then(match => {
            resolve(match);
        }).catch(err => {
            reject(err)
        });
    })


}

UserSchema.statics.Register = function (newUser) {
    return new Promise((resolve, reject) => {
        const { password } = newUser;

        this.create(newUser)
            .then(user => {
                console.log("User Created!")
                resolve(user)
            })
            .catch(err => {
                console.log("err in creating user", err)
                reject(err)
            })
    })
}

UserSchema.statics.Login = function (email, password) {
    let foundUser;
    return new Promise((resolve, reject) => {
        this.findOne({ email })
            .select('email name password role _id')
            .then(user => {
                if (!user) {
                    let err = new Error('Bu email ile kullanici bulunamadi')
                    err.status = 404;
                    return reject(err)
                }
                foundUser = user;
                console.log("Found : ", user)
                return user.comparePassword(password)
            })
            .then(correctPassword => {
                if (correctPassword) {
                    console.log("Pass : ", correctPassword)
                    let { token, user } = signToken(foundUser);
                    return resolve([token, user])
                }
                let err = new Error('Bu email ile / sifreniz uyusmuyor')
                err.status = 400;
                reject(err)
            })
            .catch(err => reject(err))
    })

}


UserSchema.methods.safe = function (user) {
    const safe = { email, name, role } = user
    return safe;
}

module.exports = mongoose.model('User', UserSchema);