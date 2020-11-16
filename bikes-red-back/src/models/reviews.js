const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const ReviewSchema = new Schema({
  code: { type: Number, unique: true },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
});

ReserveSchema.plugin(autoIncrement.plugin, {
  model: "Reserve",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

module.exports = model("Review", ReviewSchema);
