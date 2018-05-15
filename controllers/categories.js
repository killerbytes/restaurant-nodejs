var sequelize = require('sequelize')
const Category = require('../models').category;
const Product = require('../models').product;


module.exports = {

  list() {
    return new Promise((resolve, reject) => {
      Category
        .findAll({
          order: ['order']
        })
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },


  get(id) {
    return new Promise((resolve, reject) => {
      Category.findById(id)
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },
  create({ name, order }) {
    return Category.create({
      name,
      order
    })
  },
  update(id, data) {
    return new Promise((resolve, reject) => {
      Category
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

      Category.findById(id)
        .then(category => {
          if (category) {
            resolve(category.destroy())
          } else {
            reject(new Error('Category not found'))
          }
        })
        .catch(err => reject(err))
    })


  },

  sort(ids) {
    return new Promise((resolve, reject) => {
      const updates = ids.map((id, index) => {
        return Category
          .findById(id)
          .then(item => {
            item.updateAttributes({ order: index })
          })
      });
      Promise.all(updates).then(res => {
        resolve(this.list())
      }).catch(err => {
        reject(err)
      })

    })
  },

}