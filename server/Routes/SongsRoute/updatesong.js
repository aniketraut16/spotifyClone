const express = require("express");
const SongModel = require("../../Models/SongModel");
require("../../database");
const router = express.Router();

router.post("/updatesong", async (req, res) => {
  try {
    const { title, singer, album, duration } = req.body;
    const songDetails = await SongModel.findOne({ title });

    if (!songDetails) {
      return res.status(400).json({
        message: "Song doesn't exists",
      });
    }
    await SongModel.updateOne(
      { title: title },
      {
        $set: {
          title: title,
          singer: singer,
          album: album,
          duration: duration,
        },
      }
    );

    res.status(200).json({
      message: "Song Updated Succcesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
