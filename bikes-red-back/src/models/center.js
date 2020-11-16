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
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  location: {
    type: [Number],
    index: {
      type: "2dsphere",
      sparse: true,
    },
  },
  bikes: {
    type: Schema.Types.ObjectId,
    ref: "Bike",
  },
  adminCenter: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: "Reviews",
  },
  images: {
    type: Schema.Types.ObjectId,
    ref: "Image",
  },
  clients: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

CenterSchema.plugin(autoIncrement.plugin, {
  model: "Center",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

module.exports = model("Center", CenterSchema);
