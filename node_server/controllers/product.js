const express = require('express')
const ProductModel = require('mongoose').model('Product')

const router = express.Router()

module.exports = (app) => {

    app.use('/api/products', router);
};

const ProductCtrl = {
    async index(req, res, next) {
        const { limit = 10, skip = 0, searchTerm = "" } = req.query;
        let productQuery = { active: true, deletedAt: null }
        if (searchTerm && searchTerm != 'undefined' && searchTerm != 'null') {
            productQuery['name'] = { '$regex': searchTerm, '$options': 'i' }
        }
        console.log("S : ", productQuery)
        const products = await ProductModel
            .find(productQuery)
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({ createdAt: -1 })
            .populate({ path: 'category', select: 'name' })
            .catch(err => res.status(400).send({ error: err.message }))
        res.send({ data: products, limit, skip })
    },

    async search(req, res, next) {
        const { limit = 10, skip = 0, searchString = "" } = req.query;
        const products = await ProductModel
            .find({ name: { '$regex': searchString, '$options': 'i' } })
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .catch(err => res.status(400).send({ error: err.message }))
        res.send({ data: products, limit, skip, searchString })
    },

    async delete(req, res, next) {
        const { id } = req.params;
        const product = await ProductModel
            .findByIdAndDelete(id)
            .catch(err => res.status(400).send({ error: err.message }))

        res.send(product)
    },
    async add(req, res, next) {
        let p = {
            name: req.body.name,
            price: req.body.price,
            imgUrl: req.body.imgUrl || `https://via.placeholder.com/150?text=Product`,
            description: req.body.description || 'no description added',
            category: '5e48aea547ab2e4bf4c0607f',
        }
        let _p = new ProductModel(p)
        try {
            await _p.save();
            res.status(201).send(_p)
        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }

};

router
    .route('/')
    .get(ProductCtrl.index)
    .post(ProductCtrl.add)

router.route("/search").get(ProductCtrl.search)
router.route("/:id").delete(ProductCtrl.delete)    