const Bike = require("../models/bike");

exports.bike_list = function (req, res) {
  res.json({ bikes: Bike.allBikes });
};

exports.bike_one_get = async function (req, res) {
  const { code } = req.params;
  if (!code) return res.status(404).json({ message: "Id could not find" });
  let bike = await Bike.findOne({ code: code });
  if (!bike) res.status(404).json({ message: 'Can not find a bike"' });
  return res.status(200).json({ bike: bike });
};

exports.bike_create_post = async function (req, res) {
  const { code, color, model, lat, log, centerLocation } = req.body;
  if (!code || !color || !model || !lat || !log)
    return res.status(404).json({ message: "Error al ingresar datos" });
  let location = [];
  location.push(parseFloat(lat));
  location.push(parseFloat(log));
  const bike = new Bike(id, color, model, location, centerLocation);
  await bike.save();
  res.status(200).json({ msj: "ok", bike: bike });
};

exports.bike_delete_post = async function (req, res) {
  const { code } = req.params;
  if (!code) return res.status(404).json({ message: "Id could not find" });
  await Bike.deleteOne({ code: code }, (err, deleted) => {
    if (err) {
      console.log(err);
      return;
    }
    let item = Bike.allBikes.forEach((item) => (item.id === id ? item : null));
    if (item) return res.status(404).json({ message: "Elemento no eliminado" });
    return res.status(200).json({ msg: "ok" });
  });
};

exports.bike_update_put = function (req, res) {
  const { code } = req.params;
  const { color, model, lat, log, centerLocation } = req.body;
  let location = [];
  location.push(parseFloat(lat));
  location.push(parseFloat(log));

  if (!code || !color || !model || !location) {
    return res.status(404).json({ message: "The parameters was not find" });
  } else {
    Bike.findOneAndUpdate(
      { code: code },
      {
        color,
        model,
        location,
        centerLocation,
      }
    );
    res.status(200).json({ msg: "ok" });
  }
};
