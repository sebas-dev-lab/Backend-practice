const Bike = require("../models/bike");

exports.bike_list = function (req, res) {
  res.json({ bikes: Bike.allBikes });
};
