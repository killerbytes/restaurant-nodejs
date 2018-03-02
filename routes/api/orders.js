var express = require('express');
var router = express.Router();

var ordersController = require('../../controllers/orders')

router.get('/', function(req, res, next) {
  ordersController.list().then(orders=>{
    res.send({items: orders, total: orders.length})
  })
});

router.get('/:id', function(req, res, next) {
  ordersController.get(req.params.id)
  .then(table=>{
    res.send({item: table})
  })
});

router.post('/', function(req, res, next) {
  ordersController.create(req.body)
  .then(table=>{
    res.send({item: table})
  })
});



module.exports = router;
