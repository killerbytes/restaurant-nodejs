const error = require('../../utils/error')

var express = require('express');
var router = express.Router();

var tablesController = require('../../controllers/tables')

router.get('/', function (req, res, next) {
  tablesController.list({}).then(tables => {
    res.send({ items: tables, total: tables.length })
  })
});

router.get('/:id', function (req, res, next) {
  tablesController.get(req.params.id)
    .then(table => {
      if (table) {

        res.send({ item: table })
      } else {
        res.status(404).send(error.response(404, "Table not found"))
      }
    })

});



module.exports = router;
