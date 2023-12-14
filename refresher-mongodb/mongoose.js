const mongoose = require('mongoose');

const Product = require('./models/product');

const url = 'mongodb+srv://vladsto101:Salamur12@course.rgce3bw.mongodb.net/products?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(() => console.log('Connected to database!'))
    .catch(() => console.log('Connection failed!'));

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    const result = await createdProduct.save();

    console.log(`${createdProduct.id} is of type ${typeof createdProduct.id}`);
    console.log(`${createdProduct._id} is of type ${typeof createdProduct._id}`);

    res.json(result);
};

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();

    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
