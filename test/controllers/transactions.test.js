const expect = require('chai').expect

const app = require('../../app')
const transactionsController = require('../../controllers/transactions')

describe('transactions controller',()=>{
  it('it should get all transactions',done=>{
    transactionsController.list()
      .then(res=>{
        expect(res).to.be.a('array')
        expect(res.length).to.be.above(0)
        done()
      })
      .catch(done)
  })
  it('it should get a transaction',done=>{
    transactionsController.get(1)
      .then(res=>{
        expect(res).to.be.a('object')
        expect(res.user_id).to.be.a('number')
        expect(res.cart_id).to.be.a('number')
        done()
      })
      .catch(done)
  })

})