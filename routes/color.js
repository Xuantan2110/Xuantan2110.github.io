var express = require('express');
var router = express.Router();
var ColorModel = require('../models/ColorModel');
var ToyModel = require('../models/ToyModel');

router.get('/', async (req, res) => {
   var colors = await ColorModel.find({});
   res.render('color/index', { colors });
})

router.get('/add', (req, res) => {
   res.render('color/add');
})

router.post('/add', async (req, res) => {
   var color = req.body;
   await ColorModel.create(color);
   res.redirect('/color');
})

router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   //SQL: SELECT * FROM toys WHERE color = "id"
   var toys = await ToyModel.find({ color : id }).populate('color');
   res.render('color/detail', { toys })
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   var color = await ColorModel.findById(id);
   await ColorModel.deleteOne(color);
   res.redirect('/color');
})

router.get('/deleteall', async (req, res) => {
   //SQL: DELETE FROM colors
   //     TRUNCATE TABLE colors
   await ColorModel.deleteMany();
   console.log('Delete all color succeed !');
   res.redirect('/color');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var color = await ColorModel.findById(id);
   res.render('color/edit', { color });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var color = req.body;
   try {
      //SQL: UPDATE colors SET A = B WHERE id = 'id'
      await ColorModel.findByIdAndUpdate(id, color);
      console.log('update succeed !');
   } catch (err) {
      console.log('update failed. Error: ' + err);
   }
   res.redirect('/color');
})

module.exports = router;