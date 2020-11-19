const router = require("express").Router();

const imageController = require("../controllers/imageConcroller");

router.get("/:center", imageController.get_all_CenterImages);
// router.get("/:code", imageController.get_one_image);
router.post("/create", imageController.post_image);
router.put("/:code", imageController.put_data_image);
router.delete("/:code", imageController.delete_image);

module.exports = router;
