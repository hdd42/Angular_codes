const express = require('express')
const { random, commerce, lorem } = require('faker');
const CategoryModel = require('mongoose').model('Category');
const ProductModel = require('mongoose').model('Product');

const categories = ["Electronic", "Furniture", "Lightning", "Storage", "Clothing", "Shoes", "Jewelery"]
const router = express.Router()

module.exports = (app) => {
    app.all(['/', '/health'], (req, res, next) => {
        res.send('ok');
    });

    app.get('/seed', async (req, res) => {
        try {
            await CategoryModel.deleteMany({})
            await ProductModel.deleteMany({})
            console.log("seed reset");

            const mapCategories = categories.map(name => {
                return {
                    name,
                    description: lorem.sentences(3)
                }
            });
  
            for (const cat of mapCategories) {
                let category = new CategoryModel(cat);
                await category.save();

                const savedCats = await CategoryModel.find({});
                console.log("Categories saved!");


                let productsArry = [];
                for (let index = 1; index <= 500; index++) {
                    let p = {
                        name: `${commerce.productName()}${random.alphaNumeric(3)}`,
                        price: commerce.price(),
                        imgUrl: `https://via.placeholder.com/150?text=Product ${index}`,
                        description: lorem.sentences(1),
                        category: random.arrayElement(savedCats).id,
                    }
                    let _p = new ProductModel(p)
                    productsArry.push(_p)
                    category.products.push(_p.id);
                    category.productCount += 1;
                };
                await ProductModel.insertMany(productsArry)
                console.log(`Products for [${category.name}] saved`);
                await category.save();
                console.log(`Caregory [${category.name}] updated`)
            }

            res.send('seeded')
        } catch (e) {
            res.send(e.message)
        }

    })
};


