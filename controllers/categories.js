var sequelize = require('sequelize')
const Category = require('../models').category;
const Product = require('../models').product;


module.exports = {

  list(){
    return new Promise((resolve, reject)=>{
      Category
        .findAll()
        .then(res=> resolve(res))
        .catch(error=>reject(error))
    })
  },


  get(id){
    return new Promise((resolve, reject)=>{
      Category.findById(id)
        .then(res=> resolve(res))
        .catch(error=> reject(error))
    })
  },
  
}