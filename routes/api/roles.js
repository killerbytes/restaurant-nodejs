const error = require('../../utils/error')
var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../../utils/auth')

var rolesController = require('../../controllers/roles')

router.get('/', isAuthenticated, function (req, res, next) {
  rolesController.list().then(roles => {
    res.send({ items: roles, total: roles.length })
  })
});

module.exports = router;
