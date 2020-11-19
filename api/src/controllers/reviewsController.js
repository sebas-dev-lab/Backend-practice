const Review = require("../models/reviews");
const Center = require("../models/center");
/* ===== Review ==== */
exports.post_review = async (req, res) => {
  const { title, description, rating } = req.body;
  let review = await new Review({ title, description, rating });
  if (!review) return res.status(400).json({ message: "Review create error" });
  await review.save();
  res.status(200).json({ msg: "ok", review: review });
};

exports.get_one_review = async (req, res) => {
  const { code } = req.params;
  if (!code) return res.status(400).json({ msg: "Code review error" });
  const review = await findOne({ code: code });
  if (!review) return res.status(400).json({ msg: "review was not found" });
  res.status(200).json({ msg: "ok", review: review });
};

exports.get_all_review_by_center = async (req, res) => {
  const { code } = req.params;
  const reviews = Center.find({ code: code }).populate("reviews");
  if (!reviews) {
    return res.status(400).json({ msg: "Can not find reviews" });
  }
  res.status(200).json({ msg: "ok", reviews: reviews });
};
