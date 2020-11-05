const Bike = require("../models/bike");

exports.bike_list = function (req, res) {
  res.json({ bikes: Bike.allBikes });
};

exports.bike_one_get = function (req, res) {
  const { id } = req.params;
  if (!id) return res.status(404).json({ message: "Id no encontrado" });
  let bike = Bike.findById(id);
  if (!bike) res.status(404).json({ message: 'Can not find a bike"' });
  return res.status(200).json({ bike: bike });
};

exports.bike_create_post = function (req, res) {
  const { id, color, model, lat, log } = req.body;
  let location = [];
  location.push(parseFloat(lat));
  location.push(parseFloat(log));
  const bike = new Bike(id, color, model, location);
  Bike.add(bike);
  res.status(200).json(Bike.allBikes);
};

exports.bike_delete_post = function (req, res) {
  const { id } = req.params;
  if (!id) return res.status(404).json({ message: "Id no encontrado" });
  Bike.remove(id);
  let item = Bike.allBikes.forEach((item) => (item.id === id ? item : null));
  if (item) return res.status(404).json({ message: "Elemento no eliminado" });
  return res.status(200).json({ bikes: Bike.allBikes });
};

exports.bike_update_put = function (req, res) {
  const { id } = req.params;
  const { color, model, lat, log } = req.body;
  let location = [];
  location.push(parseFloat(lat));
  location.push(parseFloat(log));

  if (!id || !color || !model || !location) {
    return res.status(404).json({ message: "The parameters was not find" });
  } else {
    Bike.allBikes.map((item) => {
      if (item.id === id) {
        item.color = color;
        item.model = model;
        item.location = location;
      }
      return item;
    });
    res.status(200).json({ bike: Bike.allBikes });
  }
};
