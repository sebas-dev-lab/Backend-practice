const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const BikeSchema = new Schema({
  code: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  location: {
    type: [Number],
    index: {
      type: "2dsphere",
      sparse: true,
    },
  },
  centerLocation: {
    type: Schema.Types.ObjectId,
    ref: "Center",
  },
});

BikeSchema.statics.allBikes = function (cb) {
  return this.find({}, cb);
};
BikeSchema.plugin(autoIncrement.plugin, {
  model: "Bike",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

module.exports = model("Bike", BikeSchema);
