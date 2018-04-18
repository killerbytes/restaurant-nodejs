var express = require('express');
var router = express.Router();
const error = require('../../utils/error')
const { isAuthenticated, hasRole } = require('../../utils/auth')
var { addDays } = require('date-fns')

var sequelize = require('sequelize')
const Op = sequelize.Op;

var transactionsController = require('../../controllers/transactions')
var socket = require('../../utils/socket')

router.get('/', isAuthenticated, function (req, res, next) {
  const q = req.query
  let startDate = new Date(parseInt(q.startDate))
  let endDate = new Date(parseInt(q.endDate))
  transactionsController.list({
    where: {
      created_at: {
        [Op.between]: [startDate, addDays(endDate, 1)]
      },
    },
  })
    .then(items => {
      res.send({ items })
    })
})

router.get('/:id', isAuthenticated, function (req, res, next) {
  transactionsController.get(req.params.id)
    .then(item => {
      if (item) {

        res.send({ item })
      } else {
        res.status(404).send(error.response(404, "Transaction not found"))
      }
    })
})


router.post('/', isAuthenticated, hasRole('manager'), function (req, res, next) {
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
