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
  const { discount, amount_paid, cart_id } = req.body
  transactionsController.create({
    discount,
    amount_paid,
    cart_id,
  })
    .then(item => {
      res.send({ item })
      socket.notify({ type: 'GET_CARTS' })
    })
    .catch(err => {
      console.log(err)
      res.status(400).send({
        error: {
          status: 400,
          message: err.message
        }
      })
    })

})




module.exports = router;
