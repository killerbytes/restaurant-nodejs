var sequelize = require('sequelize')
const Table = require('../models').table;


module.exports = {

  list() {
    return new Promise((resolve, reject) => {
      Table
        .findAll({
          include: [
          ]
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },


  get(id) {
    return new Promise((resolve, reject) => {
      Table.findById(id)
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },
  create({ name, order }) {
    return Table.create({
      name,
      order
    })
  },
  update(id, data) {
    return new Promise((resolve, reject) => {
      Table
        .findById(id)
        .then(item => {
          item.update(data)
            .then(res => resolve(res))
            .catch(error => reject(error))
        })
        .catch(error => reject(error))

    })
  },

  delete(id) {
    return new Promise((resolve, reject) => {

      Table.findById(id)
        .then(table => {
          if (table) {
            resolve(table.destroy())
          } else {
            reject(new Error('Table not found'))
          }
        })
        .catch(err => reject(err))
    })


  }
}