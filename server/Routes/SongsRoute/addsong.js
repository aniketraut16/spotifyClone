const express = require("express");
const SongModel = require("../../database");
const router = express.Router();

router.post("/addsong", async (req, res) => {
  try {
    const { title, singer, album, duration } = req.body;
    const songDetails = await SongModel.findOne({ title });

    if (songDetails) {
      return res.status(400).json({
        message: "Song Already exists",
      });
    }

    const newSong = new SongModel({
      title,
      singer,
      album,
      duration,
    });

    await newSong.save();

    res.status(200).json({
      message: "Song Successfully Added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
