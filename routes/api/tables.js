const error = require('../../utils/error')
const { isAuthenticated, hasRole } = require('../../utils/auth')

var express = require('express');
var router = express.Router();

var tablesController = require('../../controllers/tables')

router.get('/', isAuthenticated, function (req, res, next) {
  tablesController.list({}).then(tables => {
    res.send({ items: tables, total: tables.length })
  })
});

router.post('/', isAuthenticated, hasRole('manager'), function (req, res, next) {
  tablesController.create(req.body)
    .then(table => {
      res.status(201).send(table)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})
router.get('/:id', isAuthenticated, function (req, res, next) {
  tablesController.get(req.params.id)
    .then(table => {
      if (table) {

        res.send(table)
      } else {
        res.status(404).send(error.response(404, "Table not found"))
      }
    })

});


router.patch('/:id', isAuthenticated, hasRole('manager'), function (req, res, next) {
  tablesController.update(req.params.id, req.body)
    .then(table => {
      res.status(202).send(table)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.delete('/:id', isAuthenticated, hasRole('manager'), function (req, res, next) {
  tablesController.delete(req.params.id)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(404).send(error.response(404, err.message))
    })
});


module.exports = router;
