const { Schema, model, SchemaTypes } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const CenterActivitySchema = new Schema({
  code: {
    type: Number,
    required: true,
  },
  userActivities: {
    type: Schema.Types.ObjectId,
    ref: "UserActivities",
  },
});

CenterActivitySchema.plugin(autoIncrement.plugin, {
  model: "CenterActivity",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});
module.exports = model("CenterActivity", CenterActivitySchema);
