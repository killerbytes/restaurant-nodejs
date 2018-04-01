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

  list({ category = {} } = {}) {
    return Product
      .findAll({
        include: [
          { model: Category, where: category },
        ]
      })
  },

  get(id) {
    return Product.findOne({
      where: {
        id
      },
      include: [
        { model: Category }
      ]
    })
  },

  create({ name, description, price, quantity, photo, category_id }) {
    return Product.create({
      name,
      description,
      price,
      quantity,
      photo,
      category_id
    })
  },

  delete(id) {
    return new Promise((resolve, reject) => {

      Product.findById(id)
        .then(product => {
          if (product) {
            resolve(product.destroy())
          } else {
            reject(new Error('Product not found'))
          }
        })
        .catch(err => reject(err))
    })

  },

  getMenu() {
    return Category.findAll({
      order: ['order'],
      include: [{ model: Product }]
    })
  }

}