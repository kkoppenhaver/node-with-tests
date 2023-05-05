const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("App", () => {
  describe("GET /", () => {
    // Test to make sure it responds with 200 status and "Hello World!"
    it("should return status 200 and Hello World!", (done) => {
      chai.request(app)
          .get('/')
          .end((err, res) => {
              res.should.have.status(200);
              res.text.should.equal("Hello World!");
              done();
          });
    });
  });
});