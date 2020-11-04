const Bike = function (id, color, model, location) {
  this.id = id;
  this.color = color;
  this.model = model;
  this.location = location;
};

Bike.prototype.toString = function () {
  return `id: ${this.id} color: ${this.color}`;
};

Bike.allBikes = [];
Bike.add = function (bike) {
  Bike.allBikes.push(bike);
};

var a = new Bike(1, "red", "urban", [-26.5382994, -59.3446029]);
var b = new Bike(2, "blue", "terrain", [-26.539125, -59.3435837]);

Bike.add(a);
Bike.add(b);

module.exports = Bike;
