const express = require("express");
const PlaylistModel = require("../../Models/PlaylistModel");
require("../../database");
const router = express.Router();

router.post("/addsongtoplaylist", async (req, res) => {
  try {
    const { title, songid } = req.body;
    const playlistdetails = await PlaylistModel.findOne({ title: title });

    if (!playlistdetails) {
      return res.status(400).json({
        message: "Playlist Doesn't Exist",
      });
    }

    // Check if songid already exists in the 'songs' array
    if (playlistdetails.songs.includes(songid)) {
      return res.status(400).json({
        message: "Song Already Exists in the Playlist",
      });
    }

    // Use $push to add the songid to the 'songs' array
    await PlaylistModel.updateOne(
      { title: title },
      { $push: { songs: songid } }
    );

    res.status(200).json({
      message: "Song Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
