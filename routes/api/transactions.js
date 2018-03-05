var express = require('express');
var router = express.Router();

var transactionsController = require('../../controllers/transactions')

// router.get('/', function(req, res, next){
//   transactionsController.list()
//   .then(items=>{
//     res.send({items})
//   })
// })

// router.get('/:id', function(req, res, next){
//   transactionsController.get(req.params.id)
//   .then(item=>{
//     res.send({item})
//   })
// })


// router.post('/', function(req, res, next) {
//   const form = req.body

//   transactionsController.create(form)
//   .then(item=>{
//     res.send({item})
//   })

// });



module.exports = router;
