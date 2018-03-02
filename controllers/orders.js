var sequelize = require('sequelize')
const Order = require('../models').order;


module.exports = {

  list(){
    return new Promise((resolve, reject)=>{
      Order
        .findAll()
        .then(res=> resolve(res))
        .catch(error=>reject(error))
    })
  },


  get(id){
    return new Promise((resolve, reject)=>{
      Order.findById(id)
        .then(res=> resolve(res))
        .catch(error=> reject(error))
    })
  },

  create(form, cart_id){
    return new Promise((resolve, reject)=>{
      const {amount, quantity, product_id} = form
      Order.create({
        product_id,
        amount,
        quantity,
        cart_id
      })
      .then(res=> resolve(res))
      .catch(error=> reject(error))
    })
  },
  
}