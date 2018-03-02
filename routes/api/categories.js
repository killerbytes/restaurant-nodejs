var express = require('express');
var router = express.Router();

var categoriesController = require('../../controllers/categories')
var productsController = require('../../controllers/products')

router.get('/', function(req, res, next) {
  categoriesController.list().then(categories=>{
    res.send({items: categories, total: categories.length})
  })
});

router.get('/:id', function(req, res, next) {
  Promise.all([
    categoriesController.get(req.params.id),
    productsController.list({
      category: {id: req.params.id}
    })
  ]).then(results=>{
    const [category, products] = results
    res.send({item: category})
  })
});



module.exports = router;
