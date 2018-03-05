var express = require('express');
var router = express.Router();

var cartsController = require('../controllers/carts')
var ordersController = require('../controllers/orders')
var customersController = require('../controllers/customers')
var utils = require('../utils')

router.get('/', function(req, res, next) {
  cartsController.list().then(carts=>{
    res.render('carts', {title: 'Active Carts', carts})
  })
});

router.get('/:id', function(req, res, next) {
  cartsController.get(req.params.id)
  .then(cart=>{
    const total = utils.getTotals(cart.orders)
    res.render('carts/details', {cart, total})
  })
});

router.post('/', function(req, res, next) {
  const {name, orders} = req.body

  customersController.create(name)
  .then(customer=>{

    cartsController.create(req.body, customer.id)
    .then(cart=>{
  
      const orderPromise = orders.map(order => {
        return ordersController.create(order, cart.id)
      });

      Promise.all(orderPromise)
      .then(order=>{
        res.send({item: cart})
      })
      
    })
  })

});

router.get('/:id/void/:order_id', function(req, res, next) {
  cartsController.get(req.params.id)
  .then(cart=>{
    res.render('carts/void', {cart})
  })
});


module.exports = router;
