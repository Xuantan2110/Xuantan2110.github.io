var mongoose = require('mongoose');
var BrandSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         minlength: [3, 'brand name must be at least 3 characters'],
         maxlength: 2000
      },
      image: String
   });
var ColorModel = mongoose.model('colors', BrandSchema);
module.exports = ColorModel;