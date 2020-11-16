const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.get_all_user);
router.get("/:code", userController.get_one_user);
router.post("/client/create", userController.post_user_client);
router.post("admincenter/create", userController.post_user_adminCenter);
router.post("adminapp/create", userController.post_user_adminApp);
router.put("/:code", userController.put_user);
router.delete("/:code", userController.delete_user);

module.exports = router;
