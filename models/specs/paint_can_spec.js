const assert = require("assert")
const PaintCan = require("../paint_can.js")

describe("Paint Can", function () {

  let paint_can;

  beforeEach(function(){
    paint_can = new PaintCan(20, true)
  });

  it("should have a number of litres of paint", function(){
    const actual = paint_can.capacity
    assert.strictEqual(actual, 20)
  });

});
