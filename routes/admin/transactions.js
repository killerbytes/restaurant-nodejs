var express = require('express');
var router = express.Router();

var transactionsController = require('../../controllers/transactions')

router.get('/:id', function(req, res, next) {
  transactionsController.get(req.params.id).then(transaction=>{
    res.render('admin/transactions/details', {title: 'Transaction', transaction})
  })
});


router.get('/', function(req, res, next){
  transactionsController.list()
  .then(transactions=>{
    let amount = 0,
      discount = 0
    const total_amount = transactions.reduce((acc, cur)=>{
      amount += parseFloat(acc.amount) + parseFloat(cur.amount)
      discount += parseFloat(acc.discount) + parseFloat(cur.discount)
      return parseFloat(acc.total_amount) + parseFloat(cur.total_amount)
    })
    res.render('admin/transactions/index', {title: 'Transactions', transactions, discount, total_amount, amount})
  })
})




module.exports = router;
