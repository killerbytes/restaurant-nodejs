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
  const {orders, cart_id} = req.body
  ordersController.create(orders, cart_id)
  .then(orders=>{
    res.send({items: orders})
  })
});




module.exports = router;
