var express = require('express');
var router = express.Router();

const { isAuthenticated, hasRole } = require('../../utils/auth')
var cartsController = require('../../controllers/carts')
var ordersController = require('../../controllers/orders')
var customersController = require('../../controllers/customers')
var notification = require('../../controllers/notifications')
var socket = require('../../utils/socket')
var error = require('../../utils/error')

router.get('/', isAuthenticated, function (req, res, next) {
  cartsController.list()
    .then(orders => {
      res.send({ items: orders, total: orders.length })
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
});

router.get('/:id', isAuthenticated, function (req, res, next) {
  cartsController.get(req.params.id)
    .then(cart => {
      if (cart === null) {
        res.status(404).send(error.response(404, 'Cart not found'))
      }
      res.send({ item: cart })
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
});

router.post('/', isAuthenticated, hasRole('user'), function (req, res, next) {
  const { name, orders } = req.body
  var _cart = {}

  customersController
    .create(name)
    .then(customer => {
      return cartsController.create(req.body, customer.id)
    })
    .then(cart => {
      _cart = cart
      return ordersController.create(orders, cart.id)

    })
    .then(order => {
      socket.notify({ type: 'GET_CARTS' })
      socket.notify({ type: 'GET_TABLES' })
      res.send({ item: _cart })

    })

    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })

});

router.patch('/customer', isAuthenticated, hasRole('user'), function (req, res, next) {
  const { cart_id, name, table_id } = req.body
  Promise.all([
    cartsController.list(),
    cartsController.get(cart_id)
  ])
    .then(all => {
      const [carts, cart] = all
      const exists = carts.find(i => i.table_id === table_id)

      if (exists && table_id) {
        res.status(400).send(error.response(400, "Table is Active"))
      } else {
        cart.customer.updateAttributes({ name })
        cart.updateAttributes({ table_id }).then(cart => {
          res.send({ item: cart })
          socket.notify({ type: 'GET_CARTS' })
          socket.notify({ type: 'GET_CART', payload: cart_id })
        })
      }
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.patch('/:id', isAuthenticated, hasRole('user'), function (req, res, next) {
  cartsController.update(req.params.id, req.body)
    .then(cart => {
      res.send({ item: cart })
      socket.notify({ type: 'GET_CARTS' })
      socket.notify({ type: 'GET_CART', payload: req.param.id })
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})


module.exports = router;
