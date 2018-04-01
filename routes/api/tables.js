const error = require('../../utils/error')

var express = require('express');
var router = express.Router();

var tablesController = require('../../controllers/tables')

router.get('/', function (req, res, next) {
  tablesController.list({}).then(tables => {
    res.send({ items: tables, total: tables.length })
  })
});

router.post('/', function (req, res, next) {
  tablesController.create(req.body)
    .then(table => {
      res.status(201).send(table)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})
router.get('/:id', function (req, res, next) {
  tablesController.get(req.params.id)
    .then(table => {
      if (table) {

        res.send(table)
      } else {
        res.status(404).send(error.response(404, "Table not found"))
      }
    })

});


router.patch('/:id', function (req, res, next) {
  tablesController.update(req.params.id, req.body)
    .then(table => {
      res.status(202).send(table)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.delete('/:id', function (req, res, next) {
  tablesController.delete(req.params.id)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(404).send(error.response(404, err.message))
    })
});


module.exports = router;
