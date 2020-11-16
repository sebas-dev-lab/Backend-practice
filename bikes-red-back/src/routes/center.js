const router = require("express").Router();
const centerController = require("../controllers/centerController");

router.get("/", centerController.get_all_center);
router.get("/:code", centerController.get_one_center);
router.post("/create", centerController.post_center);
router.put("/:code", centerController.put_center);
router.delete("/:code", centerController.delete_center);

module.exports = router;
