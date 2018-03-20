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

  create({ discount, amount_paid, cart_id }) {
    return new Promise((resolve, reject) => {
      cartsController.get(cart_id)
        .then(res => {
          const total_amount_due = res.total - discount
          if (amount_paid >= total_amount_due) {
            Transaction.create({
              discount,
              total_price: res.total,
              total_amount_due: total_amount_due,
              cart_id,
              user_id: 1
            })
              .then(res => {
                cartsController.checkout(res.id, true)
                return resolve(res)
              })
              .catch(error => reject(error))
          } else {
            reject(new Error('Insufficient amount paid'))

          }

        })
    })
  },

}