const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
chai.should()

ipsum = require('./handler.js').ipsum()

describe('handler', function() {
  it('should return a valid response', () => {
    ipsum.should.eventually.have.property("statusCode", 200)
  })
  it('should return a body', () => {
    ipsum.should.eventually.have.property("body")
  })
})