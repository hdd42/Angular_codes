const express = require("express")
const {connect} = require('./models')
const config = require("./config/config")


const app = express();

//export Routed App;
module.exports = require('./config/express-config')(app, config)

//Everything ready, let's connect to MongoDB and start http server and listen on desired port.

connect(config.db)
    .then(connectionStatus => {
        if (connectionStatus) {
            app.listen(config.port, () => {
                console.log(`${config.app.name} is running on port : ${config.port}`);
            })
        } else {
            console.log(`Something went wrong while connecting to db and app not started.`);
            process.exit(1)
        }
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
