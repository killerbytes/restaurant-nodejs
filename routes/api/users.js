const error = require('../../utils/error')
const { isAuthenticated, hasRole } = require('../../utils/auth')
var express = require('express');
var router = express.Router();


var usersController = require('../../controllers/users')

router.get('/profile', isAuthenticated, function (req, res, next) {
  usersController.get(req.CURRENT_USER.id).then(user => {
    res.send(user)
  })
    .catch(err => {
      res.status(err.status).send(error.response(err.status, err.message))
    })
});


router.get('/', isAuthenticated, function (req, res, next) {
  usersController.list().then(users => {
    res.send({ items: users, total: users.length })
  })
});

router.post('/', isAuthenticated, hasRole('manager'), function (req, res, next) {
  usersController.create(req.body)
    .then(user => {
      res.status(201).send(user)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})
router.get('/:id', isAuthenticated, function (req, res, next) {
  usersController.get(req.params.id)
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.status(err.status).send(error.response(err.status, err.message))
    })

});

router.patch('/:id/update_password', isAuthenticated, hasRole('waiter'), function (req, res, next) {
  if (req.CURRENT_USER.id == req.params.id) {

    usersController.updatePassword(req.params.id, req.body.password)
      .then(user => {
        res.status(202).send(user)
      })
      .catch(err => {
        res.status(400).send(error.response(400, err.message))
      })
  } else {
    res.status(401).send(error.response(400, 'Not allowed'))
  }
})


router.patch('/:id', isAuthenticated, hasRole('manager'), function (req, res, next) {
  usersController.update(req.params.id, req.body)
    .then(user => {
      res.status(202).send(user)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.delete('/:id', isAuthenticated, hasRole('manager'), function (req, res, next) {
  usersController.delete(req.params.id)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(404).send(error.response(404, err.message))
    })
});


module.exports = router;
