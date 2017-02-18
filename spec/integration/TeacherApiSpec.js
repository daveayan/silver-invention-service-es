var request = require('request');
var baseUrl = 'http://localhost:5001';

describe('Teacher API Tests', function() {
    it('Teacher ID 12345 is foo', function(done){
        request.get({url: baseUrl + '/teacher/12345'}, function(error, response, body){
            expect(response.statusCode).toBe(200);
            expect(body).toBe('{"uuid":"12345","message":"Foo"}');
            done();
        });
        
    });
    it('All teachers other than 12345 is bar', function(done){
        request.get({url: baseUrl + '/teacher/1234'}, function(error, response, body){
            expect(response.statusCode).toBe(200);
            expect(body).toBe('{"uuid":"1234","message":"Bar"}');
            done();
        });
        request.get({url: baseUrl + '/teacher/123456'}, function(error, response, body){
            expect(response.statusCode).toBe(200);
            expect(body).toBe('{"uuid":"123456","message":"Bar"}');
            done();
        });
    });
});