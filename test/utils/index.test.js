const expect = require('chai').expect
const currency = require('currency.js')

const utils = require('../../utils')
const fixtures = require('../fixtures')

describe('utils', () => {
  it('it should compute totals', done => {
    const totals = utils.getTotals(fixtures.orders)
    expect(totals).to.be.a('object')
    expect(totals.price).to.be.equal(currency(130).format())
    expect(totals.amount_due).to.be.equal(currency(195).format())
    done()
  })

  it('it should compute transaction totals', done => {
    const total = utils.getTransactionTotals(fixtures.transactions)
    expect(total).to.be.a('object')
    expect(total.discount).to.be.equal(currency(20).format())
    expect(total.total_price).to.be.equal(currency(5535).format())
    expect(total.total_amount_due).to.be.equal(currency(5515).format())
    done()
  })

})