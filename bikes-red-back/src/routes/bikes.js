var express = require("express");
var router = express.Router();
var bikeController = require("../controllers/bikeController.js");

router.get("/", bikeController.bike_list);
router.get("/:id", bikeController.bike_one_get);
router.post("/create", bikeController.bike_create_post);
router.delete("/:id", bikeController.bike_delete_post);
router.put("/:id", bikeController.bike_update_put);

module.exports = router;
