const assert = require("assert")
const PaintCan = require("../paint_can.js")

describe("Paint Can", function () {

  let paint_can;

  beforeEach(function(){
    paint_can1 = new PaintCan(20, 0)
    paint_can2 = new PaintCan(25, 25)
  });

  it("should have a number of litres of paint", function(){
    const actual = paint_can1.capacity
    assert.strictEqual(actual, 20)
  });

  it("should show the paint can is empty", function(){
    const actual = paint_can1.fullness
    assert.strictEqual(actual, 0)
  });

  it("should empty the fullness of paint can 2 to 0", function(){
    paint_can2.empty()
    const actual = paint_can2.fullness
    assert.strictEqual(actual, 0)
  });

});
