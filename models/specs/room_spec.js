const assert = require("assert");
const Room = require("../room.js");

describe("Room", function() {

  let room;

  beforeEach(function(){
    room = new Room(20, false)
  });

  it("should start unpainted", function () {
    const actual = room.painted;
    assert.strictEqual(actual, false)
  });

  it("should have an area of 20", function (){
    const actual = room.area;
    assert.strictEqual(actual, 20)
  });

  it("should be able to be painted", function(){
    room.isPainted()
    const actual = room.painted;
    assert.strictEqual(actual, true)
  });

});
