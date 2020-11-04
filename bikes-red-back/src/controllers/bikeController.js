const Bike = require("../models/bike");

exports.bike_list = function (req, res) {
  res.json({ bikes: Bike.allBikes });
};

exports.bike_create_post = function (req, res) {
  const { id, color, model, lat, log } = req.body;
  let location = [];
  location.push(parseFloat(lat));
  location.push(parseFloat(log));
  console.log(id, color, model, location);
  const bike = new Bike(id, color, model, location);
  Bike.add(bike);
  res.status(200).json(Bike.allBikes);
};
