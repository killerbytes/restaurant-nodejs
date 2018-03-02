var sequelize = require('sequelize')
const Customer = require('../models').customer;


module.exports = {

  create(name){
    return new Promise((resolve, reject)=>{

      Customer.create({
        name
      })
      .then(res=> resolve(res))
      .catch(error=> reject(error))
    })
  },
  
}