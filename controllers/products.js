var sequelize = require('sequelize')
const Product = require('../models').product;
const Category = require('../models').category;


module.exports = {
  update(id, data) {
    return new Promise((resolve, reject) => {
      Product
        .findById(id)
        .then(item => {
          item.update(data)
            .then(res => resolve(res))
            .catch(error => reject(error))
        })
        .catch(error => reject(error))

    })
  },

  list({ category = {} }) {

    return new Promise((resolve, reject) => {
      Product
        .findAll({
          include: [
            { model: Category, where: category },
          ]
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },

  get(id) {
    return new Promise((resolve, reject) => {
      Product.findOne({
        where: {
          id
        },
        include: [
          { model: Category }
        ]
      })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },

  getMenu() {
    return new Promise((resolve, reject) => {

      Category.findAll({
        order: ['order'],
        include: [{ model: Product }]
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

}