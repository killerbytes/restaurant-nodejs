var express = require('express');
var router = express.Router();

var productsController = require('../controllers/products')
var categoriesController = require('../controllers/categories')



/* GET home page. */
router.get('/:id', function(req, res, next) {
  
  Promise.all([
    categoriesController.list(),
    productsController.list({})
  ])
  .then(results=>{
    const [categories, products] = results

    res.render('shop', {title: 'Menu', categories, products})
  })


});


module.exports = router;
