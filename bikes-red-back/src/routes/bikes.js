var express = require("express");
var router = express.Router();
var bikeController = require("../controllers/bikeController.js");

router.get("/", bikeController.bike_list);
router.post("/create", bikeController.bike_create_post);

module.exports = router;
