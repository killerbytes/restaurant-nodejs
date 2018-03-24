const error = require('../../utils/error')

var express = require('express');
var router = express.Router();

var categoriesController = require('../../controllers/categories')
var productsController = require('../../controllers/products')

router.get('/', function (req, res, next) {
  categoriesController.list().then(categories => {
    res.send({ items: categories, total: categories.length })
  })
});

router.get('/:id', function (req, res, next) {
  categoriesController.get(req.params.id)
    .then(category => {
      if (category) {
        res.send({ item: category })
      } else {
        res.status(404).send(error.response(404, "Category not found"))
      }
    })
});



module.exports = router;
