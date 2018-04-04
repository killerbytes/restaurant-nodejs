const error = require('../../utils/error')

var express = require('express');
var router = express.Router();

var usersController = require('../../controllers/users')

router.get('/', function (req, res, next) {
  usersController.list({}).then(users => {
    res.send({ items: users, total: users.length })
  })
});

router.post('/', function (req, res, next) {
  usersController.create(req.body)
    .then(user => {
      res.status(201).send(user)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})
router.get('/:id', function (req, res, next) {
  usersController.get(req.params.id)
    .then(user => {
      if (user) {

        res.send(user)
      } else {
        res.status(404).send(error.response(404, "User not found"))
      }
    })

});


router.patch('/:id', function (req, res, next) {
  usersController.update(req.params.id, req.body)
    .then(user => {
      res.status(202).send(user)
    })
    .catch(err => {
      res.status(400).send(error.response(400, err.message))
    })
})

router.delete('/:id', function (req, res, next) {
  usersController.delete(req.params.id)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(404).send(error.response(404, err.message))
    })
});


module.exports = router;
