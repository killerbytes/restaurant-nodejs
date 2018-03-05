var sequelize = require('sequelize')
const Cart = require('../models').cart;
const Order = require('../models').order;
const Customer = require('../models').customer;
const Product = require('../models').product;


module.exports = {

  list(options = { checkout: false}){
    const {checkout} = options
    return new Promise((resolve, reject)=>{
      Cart
        .findAll({
          where: {
            checkout
          },
          include: [{
            model: Order, include: [{model: Product}] 
          },{
            model: Customer
          }]
        })
        .then(res=> resolve(res))
        .catch(error=>reject(error))
    })
  },


  get(id, is_void=false){
    return new Promise((resolve, reject)=>{
      Cart.find({
        where: {
          id
        },
        include: [{
          model: Order, include: [{model: Product} ], where: {is_void}
        },{
          model: Customer
        }]
      })
        .then(res=> resolve(res))
        .catch(error=> reject(error))
    })
  },

  create(form, customer_id){
    return new Promise((resolve, reject)=>{
      const {table_id} = form

      Cart.create({
        table_id,
        customer_id
      })
      .then(res=> resolve(res))
      .catch(error=> reject(error))
    })
  },
  
  update(form){
    return new Promise((resolve, reject)=>{
      const {table_id} = form

      Cart.create({
        table_id,
        customer_id
      })
      .then(res=> resolve(res))
      .catch(error=> reject(error))
    })
  },

  checkout(id, checkout){
    return new Promise((resolve, reject)=>{
      Cart.update({
        checkout
      },{
        where: {
          id
        }
      })
      .then(res=> resolve(res))
      .catch(error=> reject(error))
    })
  },

}