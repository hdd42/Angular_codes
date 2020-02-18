const mongoose = require("mongoose");
const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const config = require('../config/config')

// Use native promise instead of mongoose's
// Better performance
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true);


async function connect(url = config.db) {
    if (!url || typeof url !== 'string'){
        throw new Error('Mongo DB needs valid connection string url');
        process.exit(1);
    }

    try{
        await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true  } );
        console.log("Connected to DB.")
        return true;
    }catch (e) {
        console.log("DB connection failed!")
        console.log(e.message)
        return false;
    }
}


module.exports.models = {User,Product,Category};
module.exports.connect = connect