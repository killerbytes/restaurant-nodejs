const error = require('../../utils/error')
const { isAuthenticated, hasRole } = require('../../utils/auth')

var express = require('express');
var router = express.Router();

var ordersController = require('../../controllers/orders')
var socket = require('../../utils/socket')

router.get('/', isAuthenticated, function (req, res, next) {
  ordersController.list().then(orders => {
    res.send({ items: orders, total: orders.length })
  })
});

router.get('/:id', isAuthenticated, function (req, res, next) {
  ordersController.get(req.params.id)
    .then(table => {
      if (table) {
        res.send({ item: table })
      } else {
        res.status(404).send(error.response(404, "Order not found"))
      }
    })
});

router.post('/', isAuthenticated, hasRole('manager'), function (req, res, next) {
  const { orders, cart_id } = req.body
  ordersController.create(orders, cart_id)
    .then(orders => {
      res.send({ items: orders })
      socket.notify({ type: 'GET_CARTS' })
    })
});

router.patch('/void', isAuthenticated, hasRole('manager'), function (req, res, next) {
  const { order_id, quantity, cart_id } = req.body
  ordersController.void(cart_id, order_id, quantity)
    .then(order => {
      res.send({ item: order })
      socket.notify({ type: 'GET_CART', payload: cart_id })
      socket.notify({ type: 'GET_CARTS' })
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
});


router.patch('/status', isAuthenticated, hasRole('kitchen'), function (req, res, next) {
  const { cart_id, order_ids } = req.body
  try {

    if (Array.isArray(order_ids)) {

      const promises = order_ids.length && order_ids.map(order_id => {
        return ordersController.update(order_id, req.body)
      }) || [];
      Promise.all(promises)
        .then(result => {
          res.send({ item: result })
          socket.notify({ type: 'GET_CART', payload: cart_id })
          socket.notify({ type: 'GET_CARTS' })
        })
    } else {
      res.status(400).send(error.response(400, "Invalid values"))
    }
  }
  catch (err) {
    res.status(500).send(error.response(500, err.message))
  }

});


module.exports = router;
