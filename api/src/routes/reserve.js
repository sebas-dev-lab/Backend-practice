const router = require("express").Router();
const reserveController = require("../controllers/reserveController");

router.get("/:center", reserveController.get_all_center_reserve);
router.get("/:code", reserveController.get_one_reserve);
router.post("/create", reserveController.post_reserve);
router.put("/:code", reserveController.put_reserve);
router.delete("/:code", reserveController.delete_reserve);

module.exports = router;
