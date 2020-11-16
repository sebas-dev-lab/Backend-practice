const { Schema, model } = require("mongoose");

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const CenterSchema = new Schema({
  code: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  bikes: {
    type: Schema.Types.ObjectId,
    ref: "Bike",
  },
  adminCenter: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  location: {
    type: [Number],
    index: {
      type: "2dsphere",
      sparse: true,
    },
  },
});

CenterSchema.plugin(autoIncrement.plugin, {
  model: "Center",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});
