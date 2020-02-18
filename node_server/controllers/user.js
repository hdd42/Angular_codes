const express = require('express')

const router = express.Router()

module.exports = (app) => {

    app.use('/api/users', router);
};

router.route('/').get((req,res) => res.send([]))