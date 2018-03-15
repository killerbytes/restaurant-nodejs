var sequelize = require('sequelize')
const Transaction = require('../models').transaction
const Cart = require('../models').cart
const Order = require('../models').order
const Product = require('../models').product
const Customer = require('../models').customer
const User = require('../models').user

const cartsController = require('./carts')
const utils = require('../utils')

module.exports = {

  list() {
    return new Promise((resolve, reject) => {
      Transaction
        .findAll({
          include: [{
            model: Cart, include: [{ model: Customer }]
          }, {
            model: User
          }]
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },


  get(id) {
    return new Promise((resolve, reject) => {
      Transaction.find({
        where: {
          id
        },
        include: [{
          model: User
        }, {
          model: Cart, include: [{ model: Customer },
          { model: Order, include: [{ model: Product }], where: { is_void: false } },
          { model: Order, as: 'void', include: [{ model: Product }], where: { is_void: true }, required: false },
          ]
        }]
      })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },

  create({ discount, total_price, amount_paid, cart_id }) {
    return new Promise((resolve, reject) => {
      cartsController.get(cart_id)
        .then(res => {
          const total = utils.getTotals(res.orders)
          if (amount_paid >= (total.amount_due - discount)) {
            cartsController.checkout(res.id, true)
            console.log(1)
            Transaction.create({
              discount,
              total_price,
              total_amount_due: total_price,
              cart_id,
              user_id: 1
            })
              .then(res => resolve(res))
              .catch(error => reject(error))
          }

        })
    })
  },

}