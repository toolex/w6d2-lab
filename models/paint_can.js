const PaintCan = function(capacity, fullness){
  this.capacity = capacity;
  this.fullness = fullness;
};

PaintCan.prototype.empty = function () {
  this.fullness = 0
};

module.exports = PaintCan;
