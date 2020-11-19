const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const CommentUserSchema = new Schema({
  code: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

CommentUserSchema.plugin(autoIncrement.plugin, {
  model: "CommentUser",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});
module.exports = model("CommentUser", CommentUserSchema);
