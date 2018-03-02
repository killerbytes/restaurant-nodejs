var express = require('express');
var router = express.Router();

var productsController = require('../../controllers/products')

router.get('/', function(req, res, next) {
  productsController.list({}).then(products=>{
    res.render('admin/products/index', {title: 'All Products', products})
  })
});

router.get('/:id', function(req, res, next) {
  productsController.get(req.params.id).then(product=>{
    res.render('admin/products/details', {title: 'All Products', product})
  })
});



module.exports = router;
