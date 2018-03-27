const Cart = require('../models').cart;
const Order = require('../models').order;
const Customer = require('../models').customer;
const Product = require('../models').product;
const User = require('../models').user;


module.exports = {

  list(checkout = false, is_void = false) {
    return new Promise((resolve, reject) => {
      Cart
        .findAll({
          where: {
            checkout
          },
          include: [
            { model: Order, include: [{ model: Product }, { model: User }], where: { is_void }, required: false },
            { model: Order, as: 'void', include: [{ model: Product }], where: { is_void: true }, required: false },
            { model: Customer }
          ]
        })
        .then(carts => resolve(carts))
        .catch(error => reject(error))
    })
  },


  get(id, is_void = false) {
    return new Promise((resolve, reject) => {
      Cart.find({
        where: {
          id
        },
        include: [
          { model: Order, include: [{ model: Product }, { model: User }], where: { is_void }, required: false },
          { model: Order, as: 'void', include: [{ model: Product }], where: { is_void: true }, required: false },

          { model: Customer }
        ]
      })
        .then(cart => resolve(cart))
        .catch(error => reject(error))
    })
  },

  create(form, customer_id) {
    return new Promise((resolve, reject) => {
      const { table_id } = form

      Cart.create({
        table_id,
        customer_id
      })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },

  update(id, form) {
    return new Promise((resolve, reject) => {
      const { is_checkout } = form
      Cart.update({
        is_checkout
      }, {
          where: {
            id
          }
        })
        .then(cart => {
          resolve(cart)
        })
        .catch(error => reject(error))
    })
  },

  checkout(id, checkout) {
    return new Promise((resolve, reject) => {
      Cart.update({
        checkout
      }, {
          where: {
            id
          }
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },

}