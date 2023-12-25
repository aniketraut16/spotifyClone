const express = require("express");
const router = express.Router();
const admin = require("../middlewares/admin");
const {
  addSong,
  deleteSong,
  updateSong,
  songDetails,
} = require("../controllers/songsController");

router.post("/backend/songs/addsong", admin, addSong);
router.put("/backend/songs/updatesong", admin, updateSong);
router.get("/backend/songs/showsong/:part", songDetails);
router.delete("/backend/songs/deletesong/:id", deleteSong);

module.exports = router;
