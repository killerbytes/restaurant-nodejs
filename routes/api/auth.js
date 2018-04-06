const error = require('../../utils/error')

var express = require('express');
var router = express.Router();

var authController = require('../../controllers/auth')

router.post('/', function (req, res, next) {
  authController.login(req.body).then(auth => {
    res.status(200).send(auth)
  })
  .catch(err=>{
    res.status(err.status).send(error.response(err.status, err.message))
  })
});



module.exports = router;
