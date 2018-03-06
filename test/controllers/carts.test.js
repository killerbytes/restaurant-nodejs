const expect = require('chai').expect

const app = require('../../app')
const cartController = require('../../controllers/carts')

describe('carts controller',()=>{
  const table_id = 1,
    customer_id = 1
  let cart_id;
  it('it should creat a cart', done=>{
    cartController.create({table_id}, customer_id)
    .then(res=>{
        cart_id = res.id
        expect(res).to.be.a('object')
        expect(res.table_id).to.be.a('number')
        done()
      })
      .catch(done)
  })

  it('it should get all carts',done=>{
    cartController.list()
      .then(res=>{
        expect(res).to.be.a('array')
        expect(res.length).to.be.above(0)
        done()
      })
      .catch(done)
  })
  it('it should get a cart',done=>{
    cartController.get(cart_id)
    .then(res=>{
        expect(res).to.be.a('object')
        expect(res.orders).to.be.a('array')
        expect(res.table_id).to.be.equal(table_id)
        expect(res.customer_id).to.be.equal(customer_id)
        done()
      })
      .catch(done)
  })

  it('it should checkout a cart', done=>{
    cartController.checkout(cart_id, true)
      .then(res=>{
        expect(res).to.be.a('array')
        done()
      })
      .catch(done)
  })

})