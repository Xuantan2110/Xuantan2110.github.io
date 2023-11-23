var mongoose = require('mongoose')
var ASchema = mongoose.Schema({
    model: String,
    brand: String,
    color: String,
    price: String,
    image: String
});
var AModel = mongoose.model('a', AModel, 'a');
module.exports = AModel;