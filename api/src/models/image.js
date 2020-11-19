const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const ImageSchema = new Schema({
  code: { type: Number, default: 0, unique: true },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  filename: {
    type: String,
  },
  path: {
    type: String,
  },
  originalName: {
    type: String,
  },
  center: {
    type: Schema.Types.ObjectId,
    ref: "Center",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  size: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});
ImageSchema.plugin(autoIncrement.plugin, {
  model: "Image",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

module.exports = model("Image", ImageSchema);
