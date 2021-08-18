const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user")
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/ValidateUser");

router.post("/registerUser", UserController.registerUser);

router.get("/listUser",UserController.listUser);

module.exports = router;