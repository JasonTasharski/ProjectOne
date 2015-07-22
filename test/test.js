var request = require('request'),
    expect = require('chai').expect,
    cheerio = require('cheerio');
var baseUrl = 'http://localhost:3000';

describe('Home', function() {
  it('connects to default localhost:3000/', function(done) {
    request(baseUrl, function(err, res, body) {
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
    request(baseUrl + '/test/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done();
    })
  })
});

describe('New User', function() {
  it('connects to localhost/user/new/', function(done) {
    request(baseUrl + '/user/new/', function(err, res, body) { // assumes get; look up doc
      expect(res.statusCode).to.equal(200)
      done();
    })
  })
});

describe('Current', function() {
  it('connects to localhost/user/current/', function(done) {
    request(baseUrl + '/user/current/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done();
    })
  })
});

describe('Login', function() {
  it('connects to localhost/user/login/', function(done) {
    request(baseUrl + '/user/login/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done();
    })
  })
});

describe('Can Haz Database?', function() {
  it('connects to localhost/api/events/', function(done) {
    request(baseUrl + '/api/events', function(err, res, body) {
      console.log("Testing api");
      console.log(err);
      expect(res.statusCode).to.equal(200);
      console.log("Tested API");
      done();
    })
  })
});
