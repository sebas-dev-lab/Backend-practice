const { Schema, model } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const UserSchema = new Schema({
  code: { type: Number, default: 0, unique: true },
  name: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    unique: true,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: "Image",
  },
  role: {
    type: String,
    ENUM: ["client", "adminCenter", "AdminApp"],
    default: "client",
  },
  centerUserLocation: {
    type: Schema.Types.ObjectId,
    ref: "Center",
  },
});
userSchema.plugin(autoIncrement.plugin, {
  model: "User",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});
module.exports = model("User", UserSchema);
