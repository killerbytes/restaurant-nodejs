const expect = require('chai').expect

const app = require('../../app')
const productController = require('../../controllers/products')

describe('products controller',()=>{
  it('it should get all products',done=>{
    productController.list({})
      .then(res=>{
        expect(res).to.be.a('array')
        expect(res.length).to.be.equal(59)
        done()
      })
      .catch(done)
  })
  it('it should get a product',done=>{
    productController.get(1)
      .then(res=>{
        expect(res).to.be.a('object')
        expect(res.category).to.be.a('object')
        done()
      })
      .catch(done)
  })

})