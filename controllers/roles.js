var sequelize = require('sequelize')
const Role = require('../models').role;


module.exports = {

  list() {
    return new Promise((resolve, reject) => {
      Role
        .findAll()
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  }

}