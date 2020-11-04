var express = require("express");
var router = express.Router();
var bikeController = require("../controllers/bikeController.js");

router.get("/", bikeController.bike_list);

module.exports = router;
