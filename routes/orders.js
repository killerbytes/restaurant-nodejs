var express = require('express');
var router = express.Router();

var ordersController = require('../controllers/orders')
var utils = require('../utils')

router.get('/:id/void', function(req, res, next) {
  ordersController.get(req.params.id)
  .then(order=>{
    res.render('orders/void', {order})
    // res.send({order})
  })
});

router.patch('/:id/void', function(req, res, next) {
  const order_id = req.params.id
  const {quantity, cart_id} = req.body
  ordersController.void(cart_id, order_id, quantity)
  .then(order=>{
    res.redirect(`/carts/${cart_id}`)
  })
});


module.exports = router;
