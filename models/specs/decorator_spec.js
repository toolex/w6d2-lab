const assert = require("assert")
const Decorator = require("../decorator.js")
const PaintCan = require("../paint_can.js")
const Room = require("../room.js");

describe("Decorator", function(){

  let decorator;

  beforeEach(function () {
    decorator = new Decorator("Derek")
    paint_can1 = new PaintCan(20, 20)
    paint_can2 = new PaintCan(25, 25)
    room = new Room (30, false)
  });

  it("should have empty paint stock at first", function(){
    const actual = decorator.paintStock
    assert.deepStrictEqual(actual, [])
  });

  it("should be able to add a can of paint to paint stock", function () {
    decorator.addPaint(paint_can2)
    const actual = decorator.paintStock.length
    assert.deepStrictEqual(actual, 1)
  })

  it("should be able to calculate the litres of paint in stock", function(){
    decorator.addPaint(paint_can1)
    decorator.addPaint(paint_can2)
    assert.strictEqual(decorator.paintLitres(), 45)
  })

  it("should be able to calculate whether is has enough paint to paint a room", function(){
    decorator.addPaint(paint_can1)
    decorator.addPaint(paint_can2)
    assert.deepStrictEqual(decorator.roomPaintable(room), true)
  })

});
