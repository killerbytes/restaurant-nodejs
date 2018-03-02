var sequelize = require('sequelize')
const Product = require('../models').product;
const Category = require('../models').category;


module.exports = {
  update(id, data){
    return new Promise((resolve, reject)=>{
      Product
        .findById(id)
        .then(item=>{
          item.update(data)
          .then(res=>resolve(res))
          .catch(error=>reject(error))
        })
        .catch(error=>reject(error))

    })
  },

  list({category= {}}){
    
    return new Promise((resolve, reject)=>{
      Product
        .findAll({
          include: [
            {model: Category, where: category }, 
          ]
        })
        .then(res=> resolve(res))
        .catch(error=>reject(error))
    })
  },

  create(form) {
    const {Productname, password, email, fullname} = form
    return new Promise((resolve,reject)=>{

      Product
        .findOrCreate({
          where: {
            Productname
          },
          defaults: {
            Productname: Productname,
            password: password,
            email: email,
            fullname: fullname
          }
        })
        .then(res => resolve(res))
        .catch(error => reject(error));
    })
  },
  get(id){
    return new Promise((resolve, reject)=>{
      Product.findOne({
        where: {
          id
        },
        include: [
          {model: Category}
        ]
      })
      .then(res=> resolve(res))
      .catch(error=> reject(error))
    })
  },
  check: function(Productname, password, cb) {
    Product.findOne({where: {Productname}}).then(item=>{
      if (!item) { return cb(null, false); }
      if (item.password != password) { return cb(null, false); }
      return cb(null, item);

    })
  },
  getMenu(){
    return new Promise((resolve, reject)=>{
      
      Category.findAll({
        include: [{model: Product}]
      })
      .then(res=>resolve(res))
      .catch(err=>reject(err))
    })
  }
  
}