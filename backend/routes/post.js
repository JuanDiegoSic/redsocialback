const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post")
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/ValidateUser");

// GET POST PUT DELETE

router.post("/savePost",Auth, ValidateUser, PostController.savePost);

router.get("/listPost", PostController.listPost);

module.exports = router;