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

});
