var express = require('express');
var router = express.Router();
var AModel = require('../models/AModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cloud',(req, res) => {
  res.render('cloud', {semester : "dit cu may"})
})

module.exports = router;
