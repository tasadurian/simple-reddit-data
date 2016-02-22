var Reddit = require("../index.js");
var chai = require('chai'),
  expect = chai.expect;


describe("pokedex", function() {
  var promise,
    R = new Reddit();

  this.timeout(30000);

  describe(".get()", function() {
    before(function() {
      promise = R.get();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property data", function() {
      return expect(promise).to.eventually.have.deep.property(
        "kind", "Listing");
    });
  });

  describe(".get(subreddit: string)", function() {
    before(function() {
      promise = R.get('cscareerquestions');
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property data", function() {
      return expect(promise).to.eventually.have.deep.property(
        "kind", "Listing");
    });
  });

});
