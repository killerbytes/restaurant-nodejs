var express = require('express');
var router = express.Router();
var { addDays } = require('date-fns')
var sequelize = require('sequelize')
const Op = sequelize.Op;
const { isAuthenticated, hasRole } = require('../../utils/auth')

const error = require('../../utils/error')

var ordersController = require('../../controllers/orders')
var socket = require('../../utils/socket')

router.get('/', isAuthenticated, hasRole('manager'), function (req, res, next) {
  const q = req.query
  let startDate = new Date(parseInt(q.startDate))
  let endDate = new Date(parseInt(q.endDate))
  ordersController.list({
    where: {
      // status: "complete",
      is_void: false,
      created_at: {
        [Op.between]: [startDate, addDays(endDate, 1)]
      },
    },
  })
    .then(items => {
      res.send({ items })
    })
})






module.exports = router;
