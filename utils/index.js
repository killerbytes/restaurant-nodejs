module.exports = {
  getTotals(orders){
    return orders.map(i=>({price: i.price, quantity: i.quantity})).reduce((acc, cur)=>{
      return {
        discount: acc.discount + cur.discount,
        price: parseFloat(acc.price) + parseFloat(cur.price),
        amount_due: parseFloat(acc.amount_due) + (parseFloat(cur.price) * cur.quantity)
      }
      
    }, {
      discount: 0,
      price: 0,
      amount_due: 0
    })
  }
}