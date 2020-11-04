const express = require("express");
/*Import Routes */
var bikeRouter = require("./bikes");

const router = express.Router();

router.use("/bikes", bikeRouter);

module.exports = router;
