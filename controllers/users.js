var sequelize = require('sequelize')
const User = require('../models').user;


module.exports = {
  update(id, data){
    return new Promise((resolve, reject)=>{
      User
        .findById(id)
        .then(item=>{
          item.update(data)
          .then(res=>resolve(res))
          .catch(error=>reject(error))
        })
        .catch(error=>reject(error))

    })
  },

  list(){
    return new Promise((resolve, reject)=>{
      User
        .findAll()
        .then(res=> resolve(res))
        .catch(error=>reject(error))
    })
  },
  create(form) {
    const {username, password, email, name} = form
    return new Promise((resolve,reject)=>{

      User
        .findOrCreate({
          where: {
            username
          },
          defaults: {
            username: username,
            password: password,
            email: email,
            name: name
          }
        })
        .then(res => resolve(res))
        .catch(error => reject(error));
    })
  },
  get(id){
    return new Promise((resolve, reject)=>{
      User.findById(id)
        .then(res=> resolve(res))
        .catch(error=> reject(error))
    })
  },
  check: function(username, password, cb) {
    User.findOne({where: {username}}).then(item=>{
      if (!item) { return cb(null, false); }
      if (item.password != password) { return cb(null, false); }
      return cb(null, item);

    })
  }
  
}