var express = require('express');
var router = express.Router();

var tablesController = require('../../controllers/tables')

router.get('/', function(req, res, next) {
  tablesController.list({}).then(tables=>{
    res.send({items: tables, total: tables.length})
  })
});

router.get('/:id', function(req, res, next) {
  tablesController.get(req.params.id)
  .then(table=>{
    res.send({item: table})
  })
});



module.exports = router;
