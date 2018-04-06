var sequelize = require('sequelize')
const User = require('../models').user;


module.exports = {
  get(id) {
    return new Promise((resolve, reject) => {
      User.findById(id)
        .then(user => {
          if (!user) {
            throw { status: 404, message: 'User does not exists' }
          }
          return resolve(user)
        })
        .catch(error => reject(error))
    })
  },

  list() {
    return new Promise((resolve, reject) => {
      User
        .findAll()
        .then(res => resolve(res))
        .catch(error => reject(error))
    })
  },
  create(form) {
    const { username, password, email, name } = form
    return new Promise((resolve, reject) => {

      User
        .findOrCreate({
          where: {
            username
          },
          defaults: {
            username: username,
            password: User.generateHash(password),
            email: email,
            name: name
          }
        })
        .then(res => resolve(res))
        .catch(error => reject(error));
    })
  },
  update(id, data) {
    return new Promise((resolve, reject) => {
      User
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

      User.findById(id)
        .then(user => {
          if (user) {
            resolve(user.destroy())
          } else {
            reject(new Error('User not found'))
          }
        })
        .catch(err => reject(err))
    })


  },

  check: function (username, password, cb) {
    User.findOne({ where: { username } }).then(item => {
      if (!item) { return cb(null, false); }
      if (item.password != password) { return cb(null, false); }
      return cb(null, item);

    })
  }

}