const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index");
var cors = require("cors");
const app = express();
const multer = require("multer");
const uuid = require("uuid/v4");

//Database
require("dotenv").config();
require("./database");

//settings
app.set("port", process.env.PORT || 3001);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/img/uploads"),
  filename: (req, file, cb, filename) => {
    cb(null, uuid() + path.extname(file.originalname));
  },
});
app.use(multer({ storage: storage }).single("image"));

//routes
app.use("/", routes);

//starting server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

exports.module = app;
