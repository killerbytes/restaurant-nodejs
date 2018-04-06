var express = require('express');
var router = express.Router();
const { isAuthenticated, hasRole } = require('../../utils/auth')

var productsController = require('../../controllers/products')
const error = require('../../utils/error')


router.get('/', isAuthenticated, function (req, res, next) {
  productsController.list().then(products => {
    res.send({ items: products, total: products.length })
  })
});


router.post('/', isAuthenticated, hasRole('manager'), function (req, res, next) {
  productsController.create(req.body)
    .then(product => {
      res.status(201).send(product)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.get('/by_category', isAuthenticated, function (req, res, next) {
  productsController.getMenu().then(products => {
    res.send({ items: products, total: products.length })
  })
});

router.get('/:id', isAuthenticated, function (req, res, next) {
  productsController.get(req.params.id)
    .then(product => {
      if (product) {

        res.send(product)
      } else {
        res.status(404).send(error.response(404, "Product does not exists"))
      }
    })
    .catch(err => {
      res.status(404)
    })

});

router.patch('/:id', isAuthenticated, hasRole('manager'), function (req, res, next) {
  productsController.update(req.params.id, req.body)
    .then(product => {
      res.status(202).send(product)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.delete('/:id', isAuthenticated, hasRole('manager'), function (req, res, next) {
  productsController.delete(req.params.id)
    .then(products => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(404).send(error.response(404, err.message))
    })
});



module.exports = router;
