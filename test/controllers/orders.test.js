const expect = require('chai').expect

const app = require('../../app')
const ordersController = require('../../controllers/orders')

describe('orders controller',()=>{
  it('it should get all orders',done=>{
    ordersController.list({})
      .then(res=>{
        expect(res).to.be.a('array')
        expect(res.length).to.be.above(0)
        done()
      })
      .catch(done)
  })
  it('it should get an order',done=>{
    ordersController.get(99)
      .then(res=>{
        expect(res).to.be.a('object')
        expect(res.cart_id).to.be.equal(21)
        done()
      })
      .catch(done)
  })

})