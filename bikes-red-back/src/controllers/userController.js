const User = require("../models/user");
/* ===== client user ==== */
exports.post_user_client = async (req, res) => {
  const { name, dni, phone, email, role, center } = req.body;
  let user = await new User({ name, dni, phone, email, role, center });
  if (!user) return res.status(400).json({ message: "User create error" });
  user.role = "client";
  await user.save();
  res.status(200).json({ msg: "ok", user: user });
};
/* ===== AdminCenter user ==== */
exports.post_user_adminCenter = async (req, res) => {
  const { name, dni, phone, email, role, center } = req.body;
  let user = await new User({ name, dni, phone, email, role, center });
  if (!user) return res.status(400).json({ message: "User create error" });
  user.role = "adminCenter";
  await user.save();
  res.status(200).json({ msg: "ok", user: user });
};
/* ===== AdminApp user ==== */
exports.post_user_adminApp = async (req, res) => {
  const { name, dni, phone, email, role, center } = req.body;
  let user = await new User({ name, dni, phone, email, role, center });
  if (!user) return res.status(400).json({ message: "User create error" });
  user.role = "adminApp";
  await user.save();
  res.status(200).json({ msg: "ok", user: user });
};

/* ===== General operation users ==== */

exports.get_one_user = async (req, res) => {
  const { code } = req.params;
  if (!code) return res.status(400).json({ msg: "Code user error" });
  const user = await findOne({ code: code });
  if (!user) return res.status(400).json({ msg: "User was not found" });
  res.status(200).json({ msg: "ok", user: user });
};

exports.get_all_user = (req, res) => {
  User.find().then((allUsers) => {
    if (!allUsers) res.status(400).json({ msg: "Users could not be found" });
    res.status(200).json({ msg: "ok", allUsers: allUsers });
  });
};

exports.put_user = async (req, res) => {
  const { code } = req.params;
  const { name, dni, phone, email, center } = req.body;
  if (!code) return res.status(400).json({ msg: "User code, does not exist" });
  const user = await User.findOneAndUpdate(
    { code: code },
    {
      name,
      dni,
      phone,
      email,
      center,
    }
  );
  if (!user) return res.status(400).json({ msg: "User could not be updated" });
  return res.status(200).json({ msg: "ok" });
};

exports.delete_user = async (req, res) => {
  const { code } = req.params;
  await User.deleteOne({ code: code }, async (err, userDeleted) => {
    if (err) {
      console.log(err);
    }
    const user = await User.findOne({ code: code });
    if (user) return res.status(400).json({ msg: "User could not be deleted" });
    return res.status(200).json({ msg: "ok" });
  });
};
