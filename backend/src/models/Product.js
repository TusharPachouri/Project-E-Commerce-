const mongoose =  require('mongoose')
require('../db/connection')

const productSchema = new mongoose.Schema({
    Name: String
})
const Product = mongoose.model('product',productSchema);




module.exports = Product