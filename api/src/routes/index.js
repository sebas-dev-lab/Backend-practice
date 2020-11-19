const express = require("express");
/*Import Routes */
var bikeRouter = require("./bikes");
var userRouter = require("./user");
var centerRouter = require("./center");
var reserveRouter = require("./reserve");
var imageRouter = require("./image");

const router = express.Router();

router.use("/bikes", bikeRouter); //??
router.use("/user", userRouter); //??
router.use("/center", centerRouter); //??
router.use("/reserve", reserveRouter); //??
router.use("/image", imageRouter); //??

module.exports = router;
