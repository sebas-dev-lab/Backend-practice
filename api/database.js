const mongoose = require("mongoose");
const { MONGODB_HOST, MONGODB_DB } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DB}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => {
    console.log("Database is conncected");
  });

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongodb connection error: "));
