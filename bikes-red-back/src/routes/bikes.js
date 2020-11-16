var express = require("express");
var router = express.Router();
var bikeController = require("../controllers/bikeController.js");

router.get("/", bikeController.bike_list);
router.get("/:code", bikeController.bike_one_get);
router.post("/create", bikeController.bike_create_post);
router.delete("/:code", bikeController.bike_delete_post);
router.put("/:code", bikeController.bike_update_put);

module.exports = router;
