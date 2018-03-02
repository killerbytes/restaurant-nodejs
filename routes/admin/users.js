var express = require('express');
var router = express.Router();

var usersController = require('../../controllers/users')

router.get('/', 
  function(req, res, next) {
    usersController.list().then(users=>{
      res.render('admin/users/index', {title: 'Users', users})
    })
  });

router.get('/new', function(req, res, next) {
  res.render('admin/users/new', {title: 'Create User'})
});

router.get('/:id', function(req, res, next) {
  usersController.get(req.params.id).then(user=>{
    if(user){
      res.render('admin/users/detail', {title: 'Create User', user })
    }else{
      res.status(404).render('404')
    }
  })
});

router.put('/:id', function(req, res, next){
  usersController.update(req.params.id, {status: req.body.status ? true: false }).then(()=>{
    res.status(202).send()
  })
})

router.post('/', function(req, res, next) {
  usersController.create(req.body).then(([user, exists])=>{

    res.redirect(`admin/users/${user.id}`)
  })
});


module.exports = router;
