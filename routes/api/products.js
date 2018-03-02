var express = require('express');
var router = express.Router();

var productsController = require('../../controllers/products')

router.get('/', function(req, res, next) {
  productsController.list({}).then(products=>{
    res.send({items: products, total: products.length})
  })
});

router.get('/:id', function(req, res, next) {
    productsController.list({
      category: {id: req.params.id}
    })
  .then(results=>{
    const [category, products] = results
    res.send({item: category})
  })
});



module.exports = router;
