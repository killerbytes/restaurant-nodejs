var express = require('express');
var router = express.Router();

var ordersController = require('../../controllers/orders')
var socket = require('../../utils/socket')

router.get('/', function (req, res, next) {
  ordersController.list().then(orders => {
    res.send({ items: orders, total: orders.length })
  })
});

router.get('/:id', function (req, res, next) {
  ordersController.get(req.params.id)
    .then(table => {
      res.send({ item: table })
    })
});

router.post('/', function (req, res, next) {
  const { orders, cart_id } = req.body
  ordersController.create(orders, cart_id)
    .then(orders => {
      res.send({ items: orders })
    })
});

router.patch('/void', function (req, res, next) {
  const { order_id, quantity, cart_id } = req.body
  ordersController.void(cart_id, order_id, quantity)
    .then(order => {
      res.send({ item: order })
    })
});


router.patch('/status', function (req, res, next) {
  const { order_ids } = req.body
  const promises = order_ids.map(order_id => {
    return ordersController.update(order_id, req.body)
  });
  Promise.all(promises)
    .then(result => {
      res.send({ item: result })
      socket.notify({ type: 'GET_CART' })
      socket.notify({ type: 'GET_CARTS' })
    })
});


module.exports = router;
