const path = require('path');

const rootPath = path.normalize(__dirname + '/..');
let env = process.env.NODE_ENV || 'development';

const config = {
    env,
    root: rootPath,
    app: {
        name: 'My product Server'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGO_URL || "",
    secret:process.env.TOKEN_SECRET||'super_dev_secret'
};

module.exports = config;
//'mongodb://localhost/dev_db',