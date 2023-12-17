var mongoose = require('mongoose');
var CategorySchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         minlength: [3, 'category name must be at least 3 characters'],
         maxlength: 20
      },
      country: String
   });
var CategoryModel = mongoose.model('categories', CategorySchema);
module.exports = CategoryModel;