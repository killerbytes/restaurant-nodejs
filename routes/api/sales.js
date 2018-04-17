var express = require('express');
var router = express.Router();
var sequelize = require('sequelize')
const Op = sequelize.Op;
const { isAuthenticated, hasRole } = require('../../utils/auth')

const error = require('../../utils/error')

var ordersController = require('../../controllers/orders')
var socket = require('../../utils/socket')

router.get('/', isAuthenticated, hasRole('manager'), function (req, res, next) {
  const { date } = req.query
  const first = date.split('-')
  const second = date.split('-')
  ordersController.list({
    where: {
      // status: "complete",
      is_void: false,
      updated_at: {
        [Op.gte]: new Date([first]),
        [Op.lte]: new Date([second])
      },
    },
  })
    .then(items => {
      res.send({ items })
    })
})






module.exports = router;
