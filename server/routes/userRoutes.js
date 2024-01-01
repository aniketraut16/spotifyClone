const express = require("express");
const router = express.Router();
const {
  login,
  createUser,
  availableEmail,
} = require("../controllers/userController");

router.post("/backend/user/createuser", createUser);
router.post("/backend/user/login", login);
router.get("/backend/user/isavailable", availableEmail);

module.exports = router;
