const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const CategorySchema = new mongoose.Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
        },
        products: [{ type: ObjectId, ref: 'Product' }],
        productCount: { type: Number, default: 0 },
        //teachers: [{ type: ObjectId, ref: 'User' }],
        active: { type: Boolean, default: true },
        deletedAt: { type: Date, default: null }
    },
    { timestamps: true }
);


module.exports = mongoose.model('Category', CategorySchema);