var express = require('express');
var router = express.Router();

var cartsController = require('../../controllers/carts')
var ordersController = require('../../controllers/orders')
var customersController = require('../../controllers/customers')

router.get('/', function(req, res, next) {
  cartsController.list().then(orders=>{
    res.send({items: orders, total: orders.length})
  })
});

router.get('/:id', function(req, res, next) {
  cartsController.get(req.params.id)
  .then(table=>{
    res.send({item: table})
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



module.exports = router;
