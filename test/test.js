var request = require('request'),
    expect = require('chai').expect,
    cheerio = require('cheerio');
var baseUrl = 'http://localhost:3000';

describe('home', function() {
  it('connects to default localhost:3000/', function(done) {
    request('http://localhost:3000/', function(err, res, body) {
      // console.log(err);
      // console.log(res);
      // console.log(body);
      expect(res.statusCode).to.equal(200)
      done();
    })
  })
}); // LOG IN and NEW USER will be modals triggered by buttons on the navbar; LOG OUT will be triggered by a button on the navbar.

describe('Mongo Test', function() {
  it('connects to localhost/test/', function(done) {
    request('http://localhost/test/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done();
    })
  })
});