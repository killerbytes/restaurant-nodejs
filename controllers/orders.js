var sequelize = require('sequelize')
const Op = sequelize.Op;
const Order = require('../models').order;
const Cart = require('../models').cart;
const Product = require('../models').product;


module.exports = {

  list(option) {
    const config = Object.assign(option, { include: { model: Product } })

    return new Promise((resolve, reject) => {
      Order
        .findAll(config)
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },


  get(id) {
    return new Promise((resolve, reject) => {
      Order.find({
        where: {
          id
        },
        include: [{ model: Product }]
      })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },

  create(orders, cart_id) {
    const orderPromise = orders.length && orders.map(order => {
      const { price, quantity, is_void, product_id } = order

      return Order.create({
        product_id,
        price: parseFloat(price),
        quantity,
        is_void,
        cart_id,
        user_id: 2,
      })

    }) || []

    return Promise.all(orderPromise)
      .then(res => res)
      .catch(err => err)


  },

  update(id, fields) {
    const { quantity, status } = fields
    return Order.update({
      quantity,
      status
    }, {
        where: {
          id
        }
      })
  },

  void(cart_id, order_id, quantity) {
    return Promise.all([
      Cart.findById(cart_id),
      Order.findById(order_id)
    ]).then(res => {
      const [cart, order] = res
      const newQuantity = order.quantity - quantity
      if (newQuantity > 0) {
        Order.update({
          quantity: newQuantity
        }, {
            where: {
              id: order_id
            }
          })
          .then(order => order)
        order.is_void = true
        order.quantity = quantity
        this.create([order], cart.id)
      } else {
        Order.destroy({
          where: {
            id: order_id
          }
        })
        order.is_void = true
        order.quantity = quantity
        this.create([order], cart.id)
      }

    })
  }

}