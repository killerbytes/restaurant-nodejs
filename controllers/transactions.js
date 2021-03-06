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

  list(option) {
    return new Promise((resolve, reject) => {
      const config = Object.assign(option, {
        include: [{
          model: Cart, include: [{ model: Customer }]
        }, {
          model: User
        }]
      })


      Transaction
        .findAll(config)
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
          { model: Order, include: [{ model: Product }], where: { is_void: false }, required: false },
          { model: Order, as: 'void', include: [{ model: Product }], where: { is_void: true }, required: false },
          ]
        }]
      })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },

  create({ discount, amount_paid, cart_id, notes }) {
    return new Promise((resolve, reject) => {
      cartsController.get(cart_id)
        .then(res => {
          if (!res) reject(new Error('Cart not found'))
          const total_amount_due = res.total - discount
          if (amount_paid >= total_amount_due) {
            Transaction.create({
              discount,
              total_price: res.total,
              total_amount_due: total_amount_due,
              cart_id,
              notes,
              user_id: 1
            })
              .then(res => {
                cartsController.checkout(cart_id, true)
                return resolve(res)
              })
              .catch(error => reject(error))
          } else {
            reject(new Error('Insufficient amount paid'))

          }

        })
        .catch(err => reject(err))
    })
  },

}