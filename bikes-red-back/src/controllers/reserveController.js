const Reserve = require("../models/reserve");

exports.post_reserve = async (req, res) => {
  const { initialDate, finalDate, bike, center } = req.body;

  if (!initialDate || !finalDate) {
    return res
      .status(400)
      .json({ msg: "The dates can not be undefined or null" });
  }
  const reserve = await new Reserve({ initialDate, finalDate, bike, center });
  if (!reserve) {
    return res.status(400).json({ msg: "Could not be created" });
  }
  await reserve.save();
  return res.status(200).json({ msg: "ok", reserve: reserve });
};

exports.get_all_center_reserve = (req, res) => {
  const { center } = req.params;
  Reserve.find({ center: centers }).then((reserves) => {
    if (!reserves) {
      return res.status(400).json({ message: "Could not find reservers" });
    }
    res.status(200).json({ msg: "ok", reserves: reserves });
  });
};

exports.get_one_reserve = async (req, res) => {
  const { code } = req.params;
  if (!code) {
    return res
      .status(400)
      .json({ message: "Code can not be undefined or null" });
  }
  const reserve = await Reserve.findOne({ code: code });
  if (!reserve) {
    return res.status(400).json({ message: "The reserve could not be found" });
  }
  return res.status(200).json({ msg: "ok", reserve: reserve });
};

exports.put_reserve = async (req, res) => {
  const { code } = req.params;
  const { initialDate, finalDate, bike } = req.body;
  if (!code) {
    return res.status(400).json({ msg: "Code can not be undefined or null" });
  }
  await Reserve.findOneAndUpdate(
    { code: code },
    {
      initialDate,
      finalDate,
    }
  );
  res.status(400).json({ msg: "ok" });
};

exports.delete_reserve = (req, res) => {
  const { code } = req.params;
  if (!code) {
    return res
      .status(400)
      .json({ message: "Code params, can not be undefined or null" });
  }
  Reserve.deleteOne({ code: code }, (err, deleted) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({ msg: "ok" });
  });
};
