const expect = require('chai').expect

const app = require('../../app')
const customersController = require('../../controllers/customers')

describe('customers controller',()=>{
  const name = 'testing'
  it('it should creat a customer',done=>{
    customersController.create(name)
      .then(res=>{
        expect(res).to.be.a('object')
        expect(res.name).to.be.equal(name)
        done()
      })
      .catch(done)
  })

})