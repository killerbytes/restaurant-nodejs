var sequelize = require('sequelize')
const Table = require('../models').table;


module.exports = {

  list(){
    return new Promise((resolve, reject)=>{
      Table
        .findAll({
          include: [
          ]
        })
        .then(res=> resolve(res))
        .catch(error=>reject(error))
    })
  },


  get(id){
    return new Promise((resolve, reject)=>{
      Table.findById(id)
        .then(res=> resolve(res))
        .catch(error=> reject(error))
    })
  },
  
}