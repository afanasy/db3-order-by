var
  expect = require('expect.js'),
  orderBy = require('./')

describe('orderBy', function () {
  expect(orderBy('id')).to.be('`id`')
})
