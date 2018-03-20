const request = require('supertest')

const app = require('../app')
const utils = require('../utils')
const fixtures = require('./fixtures')
before((done) => {
  console.log(process.env.NODE_ENV)
  done()
})


let cart_id;


describe('/API', () => {
  describe('/GET menu request', () => {
    it('it should GET all the menu', (done) => {
      request(app)
        .get('/api/utils/menu')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          expect(res.body.items).to.be.a('array')
          expect(res.body.items.length).to.equal(6)
          done()
        })
    })
  })

  describe('/GET categories request', () => {
    it('it should GET all the categories', (done) => {
      request(app)
        .get('/api/categories')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          expect(res.body.items).to.be.a('array')
          expect(res.body.items.length).to.equal(6)
          done()
        })
    })
    it('it should GET a category', (done) => {
      request(app)
        .get('/api/categories/1')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          expect(res.body).to.be.deep.equal(fixtures.category)
          done()
        })
    })

  })

  describe('/GET tables request', () => {
    it('it should GET all the tables', (done) => {
      request(app)
        .get('/api/tables')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body.items).to.be.a('array')
          expect(res.body.items.length).to.equal(10)
          done()
        })
    })
    it('it should GET a table', (done) => {
      request(app)
        .get('/api/tables/1')
        .expect(200)
        .end((err, res) => {
          expect(res.body.item).to.be.a('object')
          expect(res.body.item).to.be.deep.equal(fixtures.table)
          done()
        })
    })

  })

  describe('/GET products request', () => {
    it('it should GET all the products', (done) => {
      request(app)
        .get('/api/products')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          expect(res.body.items).to.be.a('array')
          expect(res.body.items.length).to.equal(59)
          done()
        })
    })

  })

  let item = {}

  describe('/POST carts', () => {
    it('it should POST a cart', (done) => {
      request(app)
        .post('/api/carts')
        .send(fixtures.postCart)
        .set('Accept', 'application/json')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          const { id, table_id, customer_id } = res.body.item
          cart_id = id
          item = {
            id,
            table_id,
            customer_id
          }
          done()
        })
    })

    it('it should GET all carts', (done) => {
      request(app)
        .get('/api/carts')
        .set('Accept', 'application/json')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          expect(res.body.items).to.be.a('array')
          expect(res.body.items.length).to.be.equal(1)
          done()

        })


    })


    it('it should GET a cart', (done) => {
      request(app)
        .get('/api/carts/' + item.id)
        .set('Accept', 'application/json')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          const { id, table_id, customer_id } = res.body.item
          expect(res.body.item).to.be.a('object')
          expect(res.body.item.orders).to.be.a('array')
          expect(res.body.item.orders.length).to.be.equal(4)
          expect(id).to.be.equal(item.id)
          expect(customer_id).to.be.equal(item.customer_id)
          expect(table_id).to.be.equal(item.table_id)
          done()

        })


    })

    it('it should move cart to a table', (done) => {
      request(app)
        .patch(`/api/carts/${item.id}/customer`)
        .set('Accept', 'application/json')
        .send({ name: 'New Table', table_id: 4 })
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          const { table_id, customer: { name } } = res.body.item
          expect(res.body.item).to.be.a('object')
          expect(table_id).to.be.equal(4)
          expect(name).to.be.equal('New Table')
          done()
        })
    })
  })

  describe('/GET orders', () => {
    it('it should get all orders', (done) => {
      request(app)
        .get('/api/orders')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          expect(res.body.items).to.be.a('array')
          expect(res.body.items.length).to.be.above(1)
          done()
        })

    })
    it('it should get an order', (done) => {
      request(app)
        .get('/api/orders/1')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          expect(res.body.item).to.be.a('object')
          expect(res.body.item.id).to.exist
          expect(res.body.item.quantity).to.exist
          expect(res.body.item.status).to.exist
          expect(res.body.item.price).to.exist
          expect(res.body.item.product).to.exist
          expect(res.body.item.product).to.be.a('object')
          done()
        })

    })

    it('it should post an order', (done) => {
      request(app)
        .post('/api/orders')
        .send(fixtures.postOrders)
        .set('Accept', 'application/json')
        .expect(200)
        .expect(/json/)
        .end((err, res) => {
          expect(res.body).to.be.a('object')
          expect(res.body.items).to.be.a('array')
          expect(res.body.items.length).to.be.equal(2)

          done()
        })

    })
  })


})

// describe('/', ()=>{
//   describe('request home', ()=>{
//     it('show the homepage', (done)=>{

//       request(app)
//         .get('/')
//         .expect('Content-Type', /text\/html/)
//         .expect(200)
//         .expect(/Homepage/, done)
//     })
//   })

//   describe('/users',()=>{
//     it('it should show all users', done=>{
//       request(app)
//         .get('/users')
//         .expect('Content-Type', /text\/html/)
//         .expect(200)
//         .expect(/Users/, done)

//     })
//   })

//   describe('/products', ()=>{
//     it('it should show all products', done=>{
//       request(app)
//         .get('/products')
//         .expect('Content-Type', /text\/html/)
//         .expect(200)
//         .expect(/All Products/, done)

//     })

//     it('it should show a product', done=>{
//       request(app)
//         .get('/products/1')
//         .expect('Content-Type', /text\/html/)
//         .expect(200)
//         .expect(/Homemade Chicken Nuggets/, done)

//     })

//     it('it should show a product form', done=>{
//       request(app)
//         .get('/products/new')
//         .expect('Content-Type', /text\/html/)
//         .expect(200)
//         .expect(/New Product/, done)

//     })

//   })

//   describe('GET open carts',()=>{

//     it('it shows all open carts', (done)=>{
//       request(app)
//         .get('/carts')
//         .expect('Content-Type', /text\/html/)
//         .expect(200)
//         .expect(/Active Carts/, done)
//     })

//     it('it shows a cart', (done)=>{
//       request(app)
//         .get('/carts/1')
//         .expect('Content-Type', /text\/html/)
//         .expect(200, done)
//     })


//   })

//   describe('GET categories', ()=>{
//     it('it should show all categories', done=>{
//       request(app)
//         .get('/categories')
//         .expect('Content-Type', /text\/html/)
//         .expect(200, done)        
//     })

//     it('it should show a category', done=>{
//       request(app)
//         .get('/categories/1')
//         .expect('Content-Type', /text\/html/)
//         .expect(200, done)        
//     })

//   })

//   describe('GET orders',()=>{

//     it('it shows void order', (done)=>{
//       request(app)
//         .get('/orders/1/void')
//         .expect('Content-Type', /text\/html/)
//         .expect(200, done)


//     })

//     it('it voids the order',(done)=>{
//       request(app)
//         .patch('/orders/1/void')
//         .send({quantity: 1, cart_id: 1})
//         .expect('Content-Type', /text\/plain/)
//         .expect('Location', '/carts/1')
//         .expect(302, done)
//     })

//   })


//   describe('GET transactions',()=>{

//     it('it checkout', (done)=>{
//       let cart
//       request(app)
//         .get('/api/carts/1')
//         .set('Accept', 'application/json')
//         .end((err, res)=>{
//           cart = res.body.item
//           const {amount_due} = utils.getTotals(cart.orders)
//           const discount = 10
//           request(app)
//             .post('/transactions')
//             .send({cart_id: cart.id, total_price: amount_due, discount, amount_paid: amount_due - discount})
//             .expect('Location', 'transactions/1')
//             .expect('Content-Type', /text\/plain/)
//             .expect(302, done)
//         })


//     })

//     it('it shows all the transactions',(done)=>{
//       request(app)
//         .get('/transactions')
//         .expect('Content-Type', /text\/html/)
//         .expect(200)
//         .expect(/Transactions/, done)
//     })

//     it('it shows a transaction', done=>{
//       request(app)
//         .get('/transactions/1')
//         .expect('Content-Type', /text\/html/)
//         .expect(200)
//         .expect(/Transactions/, done)
//     })
//   })
// })
