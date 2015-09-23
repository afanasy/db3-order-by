var
  expect = require('expect.js'),
  orderBy = require('./')

describe('orderBy', function () {
  it('formats string', function () {
    expect(orderBy('id')).to.be('`id`')
  })
  it('formats object', function () {
    expect(orderBy({id: 'desc', name: 'asc'})).to.be('`id` desc, `name` asc')
  })
  it('formats array', function () {
    expect(orderBy(['id', {name: 'desc'}])).to.be('`id`, `name` desc')
  })
})
