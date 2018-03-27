var express = require('express');
var router = express.Router();
var sequelize = require('sequelize')
const Op = sequelize.Op;

const error = require('../../utils/error')

var ordersController = require('../../controllers/orders')
var socket = require('../../utils/socket')

router.get('/', function (req, res, next) {
  ordersController.list({
    where: {
      // status: "complete",
      is_void: false,
      updated_at: {
        [Op.gte]: new Date(2018, 2, 25),
        [Op.lte]: new Date(2018, 2, 26)
      },
    },
  })
    .then(items => {
      res.send({ items })
    })
})






module.exports = router;
