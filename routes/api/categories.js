const error = require('../../utils/error')
const { isAuthenticated, hasRole } = require('../../utils/auth')

var express = require('express');
var router = express.Router();

var categoriesController = require('../../controllers/categories')

router.get('/', isAuthenticated, function (req, res, next) {
  categoriesController.list().then(categories => {
    res.send({ items: categories, total: categories.length })
  })
});

router.post('/', isAuthenticated, hasRole('manager'), function (req, res, next) {
  categoriesController.create(req.body)
    .then(category => {
      res.status(201).send(category)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.get('/:id', isAuthenticated, function (req, res, next) {
  categoriesController.get(req.params.id)
    .then(category => {
      if (category) {
        res.send(category)
      } else {
        res.status(404).send(error.response(404, "Category not found"))
      }
    })
});

router.patch('/:id', isAuthenticated, hasRole('manager'), function (req, res, next) {
  categoriesController.update(req.params.id, req.body)
    .then(category => {
      res.status(202).send(category)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.delete('/:id', isAuthenticated, hasRole('manager'), function (req, res, next) {
  categoriesController.delete(req.params.id)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
});



module.exports = router;
