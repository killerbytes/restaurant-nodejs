const expect = require('chai').expect

const app = require('../../app')
const tablesController = require('../../controllers/tables')

describe('tables controller',()=>{
  it('it should get all tables',done=>{
    tablesController.list()
      .then(res=>{
        expect(res).to.be.a('array')
        expect(res.length).to.be.above(0)
        done()
      })
      .catch(done)
  })
  it('it should get a table',done=>{
    tablesController.get(1)
      .then(res=>{
        expect(res).to.be.a('object')
        done()
      })
      .catch(done)
  })

})