const express = require("express");
const SongModel = require("../../database");
const router = express.Router();

router.get("/showsongs", async (req, res) => {
  try {
    const songDetails = await SongModel.find();
    res.status(200).json(songDetails);
  } catch (error) {
    console.error("Error fetching login details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
