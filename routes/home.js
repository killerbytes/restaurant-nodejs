var express = require('express');
var router = express.Router();

var productsController = require('../controllers/products')
var tablesController = require('../controllers/tables')



/* GET home page. */
router.get('/', function(req, res, next) {
  tablesController.list().then(tables=>{

    res.render('index', {title: 'Homepage', tables})
  })


});


module.exports = router;
