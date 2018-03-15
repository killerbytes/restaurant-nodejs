var express = require('express');
var router = express.Router();

var transactionsController = require('../../controllers/transactions')
var socket = require('../../utils/socket')

router.get('/', function (req, res, next) {
  transactionsController.list()
    .then(items => {
      res.send({ items })
    })
})

router.get('/:id', function (req, res, next) {
  transactionsController.get(req.params.id)
    .then(item => {
      res.send({ item })
    })
})


router.post('/', function (req, res, next) {
  const { discount, total_price, amount_paid, cart_id } = req.body
  const amount_due = parseFloat(total_price) - discount
  if (amount_paid >= amount_due) {
    transactionsController.create({
      discount,
      total_price,
      amount_paid,
      cart_id,
    }).then(item => {
      res.send({ item })
      socket.notify({ type: 'GET_CARTS' })
    })
  } else {
    res.send({
      error: {
        status: 401,
        message: 'Insufficient Paid Amount'
      }
    })
  }

})




module.exports = router;
