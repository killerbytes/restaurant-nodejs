var express = require('express');
var router = express.Router();

var categoriesController = require('../../controllers/categories')
var productsController = require('../../controllers/products')

router.get('/', function(req, res, next) {
  categoriesController.list().then(categories=>{
    res.render('admin/categories/index', {title: 'All Category', categories})
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
    res.render('admin/categories/details', {title: category.name, category, products})
  })
  // .then(category=>{
  // })
  // productsController.list(req.params.id).then(products=>{
  // })
});



module.exports = router;
