const request = require('supertest');
const app = require('../app.js');
describe('GET /hello', function() {
    it('respond with hello world', function(done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/hello').expect('hello world', done);
    });
});