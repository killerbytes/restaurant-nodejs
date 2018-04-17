require('dotenv').load();
const currency = require('currency.js')
const jwt = require('jsonwebtoken')
const secret_key = process.env.SECRET_KEY
const userController = require('../controllers/users')

let roles = {
  user: {},
  waiter: { extends: ['user'] },
  kitchen: { extends: ['user'] },
  cashier: { extends: ['waiter', 'kitchen'] },
  manager: { extends: ['cashier'] },
  admin: { extends: ['manager'] }
}

let mappedRoles = new Map()

function getRoles(role) {
  var items = []
  function getExtended(role) {
    items = [...items, ...[role]]
    if (roles[role].extends) {
      roles[role].extends.forEach(item => {
        getExtended(item)
      })
    }
    return [...new Set(items)]
  }
  return getExtended(role)
}


Object.keys(roles).forEach(role => {
  mappedRoles.set(role, getRoles(role))
})

function isAllowed(role, user) {

  return mappedRoles.get(user)
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
          req.CURRENT_USER = decoded
          return next()
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
            const allowed = isAllowed(role, user.role)
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