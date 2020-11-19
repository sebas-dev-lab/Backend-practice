const Center = require("../models/center");
/* ===== Center ==== */
exports.post_center = async (req, res) => {
  const { name, phone, email, adminCenter } = req.body;
  let center = await new User({ name, dni, phone, email, adminCenter });
  if (!center) return res.status(400).json({ message: "Center create error" });
  await center.save();
  res.status(200).json({ msg: "ok", center: center });
};

exports.get_one_center = async (req, res) => {
  const { code } = req.params;
  if (!code) return res.status(400).json({ msg: "Code center error" });
  const center = await findOne({ code: code });
  if (!center) return res.status(400).json({ msg: "center was not found" });
  res.status(200).json({ msg: "ok", center: center });
};

exports.get_all_center = (req, res) => {
  Center.find().then((allCenters) => {
    if (!allCenters)
      res.status(400).json({ msg: "Centers could not be found" });
    res.status(200).json({ msg: "ok", allCenters: allCenters });
  });
};

exports.put_center = async (req, res) => {
  const { code } = req.params;
  const { name, description, phone, email, lat, log } = req.body;
  let location = [];
  location.push(parseFloat(lat));
  location.push(parseFloat(log));

  if (!code)
    return res.status(400).json({ msg: "Center code, does not exist" });
  const center = await Center.findOneAndUpdate(
    { code: code },
    {
      name,
      description,
      phone,
      email,
      location,
    }
  );
  if (!center)
    return res.status(400).json({ msg: "Center could not be updated" });
  return res.status(200).json({ msg: "ok" });
};

exports.delete_center = async (req, res) => {
  const { code } = req.params;
  await Center.deleteOne({ code: code }, async (err, userDeleted) => {
    if (err) {
      console.log(err);
    }
    const center = await Center.findOne({ code: code });
    if (center)
      return res.status(400).json({ msg: "Center could not be deleted" });
    return res.status(200).json({ msg: "ok" });
  });
};
