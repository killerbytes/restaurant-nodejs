var express = require('express');
var router = express.Router();
var passport = require('passport');


var usersController = require('../controllers/users')

router.get('/', function(req, res, next) {
  res.render('login', {title: 'Login', errors: req.flash('error')})
});

router.post('/', 
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: 'Invalid username or password.'  }),
  function(req, res, next) {
    res.redirect(req.session.returnTo)
  });



module.exports = router;
