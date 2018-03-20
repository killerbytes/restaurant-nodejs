var express = require('express');
var router = express.Router();

var cartsController = require('../../controllers/carts')
var ordersController = require('../../controllers/orders')
var customersController = require('../../controllers/customers')
var notification = require('../../controllers/notifications')
var socket = require('../../utils/socket')

router.get('/', function (req, res, next) {
  cartsController.list().then(orders => {
    res.send({ items: orders, total: orders.length })
  })
});

router.get('/:id', function (req, res, next) {
  cartsController.get(req.params.id)
    .then(cart => {
      if (cart === null) {
        res.status(404).send()
      }
      res.send({ item: cart })
    })
});

router.post('/', function (req, res, next) {
  const { name, orders } = req.body
  customersController.create(name)
    .then(customer => {

      cartsController.create(req.body, customer.id)
        .then(cart => {

          ordersController.create(orders, cart.id)
            .then(order => {
              res.send({ item: cart })
              socket.notify({ type: 'GET_CARTS' })

            })

        })
    })

});

router.patch('/:id', function (req, res, next) {
  cartsController.update(req.params.id, req.body)
    .then(cart => {
      res.send({ item: cart })
      socket.notify({ type: 'GET_CARTS' })
    })
})

router.patch('/:id/customer', function (req, res, next) {
  const { name, table_id } = req.body
  Promise.all([
    cartsController.list(),
    cartsController.get(req.params.id)
  ])
    .then(all => {
      const [carts, cart] = all
      const exists = carts.find(i => i.table_id === table_id)

      if (exists && table_id) {
        res.status(400).send() // Cart is active
      } else {
        cart.customer.updateAttributes({ name })
        cart.updateAttributes({ table_id }).then(cart => {
          res.send({ item: cart })
          socket.notify({ type: 'GET_CARTS' })
        })
      }
    })
})



module.exports = router;
