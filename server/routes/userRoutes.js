const express = require("express");
const router = express.Router();
const { login, createUser } = require("../controllers/userController");

router.post("/backend/user/createuser", createUser);
router.post("/backend/songs/login", login);

module.exports = router;
