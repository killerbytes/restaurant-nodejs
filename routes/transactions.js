var express = require('express');
var router = express.Router();

var transactionsController = require('../controllers/transactions')
const utils = require('../utils')



router.get('/', function(req, res, next){
  transactionsController.list()
  .then(transactions=>{
    // const total_amount = transactions.reduce((acc, cur)=>{
    //   amount += parseFloat(acc.amount) + parseFloat(cur.amount)
    //   discount += parseFloat(acc.discount) + parseFloat(cur.discount)
    //   return parseFloat(acc.total_amount) + parseFloat(cur.total_amount)
    // })
    const total = utils.getTotals(transactions)

    res.render('transactions/index', {title: 'Transactions', transactions, total })
  })
})


router.post('/', function(req, res, next){
  const {discount, total_price, amount_paid, cart_id} = req.body
  const amount_due = parseFloat(total_price) - discount
  if(amount_paid == amount_due){
    transactionsController.create({
      discount,
      total_price,
      amount_paid,
      cart_id,
    }).then(transaction=>{
      res.redirect(`transactions/${transaction.id}`)
    })
  }else{
    res.redirect(`carts/${cart_id}`)
  }

})

router.get('/:id', function(req, res, next) {
  transactionsController.get(req.params.id).then(transaction=>{
    const total = utils.getTotals(transaction.cart.orders)
    // res.send({transaction})

    res.render('transactions/details', {title: 'Transaction', transaction, total})
  })
});


module.exports = router;
