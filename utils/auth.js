require('dotenv').load();
const jwt = require('jsonwebtoken')
const secret_key = process.env.SECRET_KEY
const userController = require('../controllers/users')

const currency = require('currency.js')
const isAllowed = (roles, role) => {
  return roles.split(',')
    .find(i => i === role) ? true : false

}


module.exports = {
  isAuthenticated(req, res, next) {
    const token = req.headers['x-access-token']
    if (token) {
      jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
          throw { status: 401, message: err.message }
        } else {
          next()
        }
      })
    } else {
      throw { status: 401, message: 'Unauthorized' }
    }
  },
  hasRole(role) {
    return function (req, res, next) {
      const token = req.headers['x-access-token']
      jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
          throw { status: 401, message: err.message }
        } else {
          userController.get(decoded.id).then(user => {
            const allowed = isAllowed(user.roles, role)
            if (allowed) {
              next()
            } else {
              throw { status: 401, message: 'User is not authorized' }
            }
          })
            .catch(err => {
              next(err)
            })
        }
      })
    }
  },



}