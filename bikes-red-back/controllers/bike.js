const Bike = require("../models/bikes");

exports.bike_list = function (req, res) {
  res.render("bikes/index", { bikes: Bike.allBikes });
};
