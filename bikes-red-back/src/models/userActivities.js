const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const UserActivitySchema = new Schema({
  code: {
    type: Number,
    required: true,
  },
  commentsUser: {
    type: Schema.Types.ObjectId,
    ref: "CommentUser",
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: "Image",
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: "Reviews",
  },
});

UserActivitySchema.plugin(autoIncrement.plugin, {
  model: "UserActivity",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});
module.exports = model("UserActivity", UserActivitySchema);
