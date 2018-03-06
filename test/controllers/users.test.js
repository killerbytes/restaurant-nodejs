const expect = require('chai').expect

const app = require('../../app')
const usersController = require('../../controllers/users')


describe('users controller',()=>{
  const user = {
    username: 'test',
    password: 'test',
    email: 'email@email.com',
    name: 'test test'
  }
  it('it should create a user', done=>{
    usersController.create(user)
      .then(res=>{
        const [item, exist] = res
        expect(item).to.be.a('object')
        expect(item.username).to.be.equal(user.username)
        done()
      })
      .catch(done)
  })

  it('it should update user', done=>{
    usersController.update(1, {name: user.name})
      .then(res=>{
        expect(res).to.be.a('object')
        expect(res.name).to.be.equal(user.name)
        done()
      })
      .catch(done)
  })

  it('it should get a user',done=>{
    usersController.get(1)
      .then(res=>{
        expect(res).to.be.a('object')
        done()
      })
      .catch(done)
  })

  it('it should get all users',done=>{
    usersController.list()
      .then(res=>{
        expect(res).to.be.a('array')
        expect(res.length).to.be.above(1)
        done()
      })
      .catch(done)
  })

  // it('it should check usernname and password', done=>{
  //   usersController.check(user.username, user.password)
  //     .then(res=>{
  //       console.log(res)
  //       expect(res).to.be.equal
  //       done()
  //     })
  //     .catch(done)
  // })

})