var express = require('express');
var router = express.Router();
const error = require('../../utils/error')

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
      if (item) {

        res.send({ item })
      } else {
        res.status(404).send(error.response(404, "Transaction not found"))
      }
    })
})


router.post('/', function (req, res, next) {
  const { discount, amount_paid, cart_id } = req.body
  try {
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
        res.status(400).send(error.response(400, err.message))
      })


  } catch (err) {
    res.status(500).send(error.response(500, err.message))
  }
})




module.exports = router;
