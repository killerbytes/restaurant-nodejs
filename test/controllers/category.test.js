const expect = require('chai').expect

const app = require('../../app')
const categoryController = require('../../controllers/categories')

describe('category controller',()=>{
  it('it should get all categories',done=>{
    categoryController.list({})
      .then(res=>{
        expect(res).to.be.a('array')
        expect(res.length).to.be.equal(6)
        done()
      })
      .catch(done)
  })
  it('it should get a category',done=>{
    categoryController.get(1)
      .then(res=>{
        expect(res).to.be.a('object')
        done()
      })
      .catch(done)
  })

})