const express = require("express");
const router = express.Router();
const {
  addSong,
  deleteSong,
  updateSong,
  songDetails,
} = require("../controllers/songsController");

router.post("/backend/songs/addsong", addSong);
router.put("/backend/songs/updatesong", updateSong);
router.get("/backend/songs/showsong/:part", songDetails);
router.delete("/backend/songs/deletesong/:id", deleteSong);

module.exports = router;
