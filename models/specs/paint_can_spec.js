const assert = require("assert")
const PaintCan = require("../paint_can.js")

describe("Paint Can", function () {

  let paint_can;

  beforeEach(function(){
    paint_can = new PaintCan(20, 0)
  });

  it("should have a number of litres of paint", function(){
    const actual = paint_can.capacity
    assert.strictEqual(actual, 20)
  });

  it("should show the paint can is empty", function(){
    const actual = paint_can.fullness
    assert.strictEqual(actual, 0)
  });

});
