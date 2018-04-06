require('dotenv').load();
const jwt = require('jsonwebtoken')
const secret_key = process.env.SECRET_KEY

const currency = require('currency.js')

module.exports = {
  getTotals(orders) {
    return orders.map(i => ({ price: i.price, quantity: i.quantity })).reduce((acc, cur) => {
      return currency(acc).add(parseFloat(cur.price) * cur.quantity).value
    }, 0)
  },
  getTransactionTotals(orders) {
    return orders.map(i => ({ total_price: i.total_price, discount: i.discount })).reduce((acc, cur) => {
      return {
        discount: currency(acc.discount).add(cur.discount).format(),
        total_price: currency(acc.total_price).add(cur.total_price).format(),
        total_amount_due: currency(acc.total_amount_due).add(currency(cur.total_price).subtract(cur.discount)).format()
      }

    }, {
        discount: 0,
        total_price: 0,
        total_amount_due: 0
      })
  }

}