var sequelize = require('sequelize')
const Transaction = require('../models').transaction
const Cart = require('../models').cart
const Order = require('../models').order
const Product = require('../models').product
const Customer = require('../models').customer
const User = require('../models').user


module.exports = {

  list(){
    return new Promise((resolve, reject)=>{
      Transaction
        .findAll({
          include: [{
            model: Cart, include: [{model: Customer}]
          },{
            model: User
          }]
        })
        .then(res=> resolve(res))
        .catch(error=>reject(error))
    })
  },


  get(id){
    return new Promise((resolve, reject)=>{
      Transaction.find({
        where: {
          id
        },
        include: [{
          model: Cart, include: [{model: Customer}, {model: Order, include: [{model: Product}]}]
        }]
      })
        .then(res=> resolve(res))
        .catch(error=> reject(error))
    })
  },

  create(form){
    return new Promise((resolve, reject)=>{
      const {amount, discount, total_amount, cart_id} = form

      Transaction.create({
        amount,
        discount,
        total_amount,
        cart_id,
        user_id: 1
      })
      .then(res=> resolve(res))
      .catch(error=> reject(error))
    })
  },
  
}