const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const ReserveSchema = new Schema({
  code: { type: Number, unique: true },
  initialDate: {
    type: Date,
    required: true,
  },
  finalDate: {
    type: Date,
    required: true,
  },
  bike: {
    type: Schema.Types.ObjectId,
    ref: "Bike",
  },
  center: {
    type: Schema.Types.ObjectId,
    ref: "Center",
  },
});

ReserveSchema.plugin(autoIncrement.plugin, {
  model: "Reserve",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

module.exports = model("Reserve", ReserveSchema);
