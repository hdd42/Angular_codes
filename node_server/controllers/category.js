const express = require('express')
const CategoryModel = require('mongoose').model('Category')

const router = express.Router()

module.exports = (app) => {

    app.use('/api/category', router);
};

const CategoryCtrl = {
    async index(req, res, next) {
        const categories = await CategoryModel
        .find({})
        .select("-products")
        res.send(categories)
    }
};

router
    .route('/')
    .get(CategoryCtrl.index);