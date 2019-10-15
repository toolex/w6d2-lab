const Decorator = function (name) {
  this.paintStock = [];
  this.name = name;
};

Decorator.prototype.addPaint = function (paint_can) {
  this.paintStock.push(paint_can) // tried shift didnt work WHY?!?!?!?!?!
};

Decorator.prototype.paintLitres = function () {
  let total = 0;
  for (paintCan of this.paintStock){
    total += paintCan.fullness; // WHYYYYY does total need to be on the left?!?!?!?!!?!?!?!?
  }
  return total;
};

Decorator.prototype.roomPaintable = function (room) {
  return this.paintLitres() >= room.area; // Remember no implicxit returns
};

module.exports = Decorator;
