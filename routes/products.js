var express = require('express');
var router = express.Router();

var productsController = require('../controllers/products')

router.get('/', function(req, res, next) {
  productsController.list({}).then(products=>{
    res.render('products/index', {title: 'All Products', products})
  })
});

router.get('/new', function(req, res, next) {
  res.render('products/new', {title: 'New Product'})
});

router.get('/:id', function(req, res, next) {
  productsController.get(req.params.id).then(product=>{
    res.render('products/details', {title: product.name, product})
  })
});



module.exports = router;
