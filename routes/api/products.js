var express = require('express');
var router = express.Router();

var productsController = require('../../controllers/products')

router.get('/', function (req, res, next) {
  productsController.list({}).then(products => {
    res.send({ items: products, total: products.length })
  })
});



router.get('/menu', function (req, res, next) {
  productsController.getMenu().then(products => {
    res.send({ items: products, total: products.length })
  })
});

module.exports = router;
