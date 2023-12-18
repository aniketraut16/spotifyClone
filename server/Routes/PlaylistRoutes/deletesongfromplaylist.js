const express = require("express");
const PlaylistModel = require("../../Models/PlaylistModel");
require("../../database");
const router = express.Router();

router.post("/deletesongfromplaylist", async (req, res) => {
  try {
    const { title, songid } = req.body;
    const playlist = await PlaylistModel.findOne({ title: title });

    if (!playlist) {
      return res.status(400).json({
        message: "Playlist Doesn't Exist",
      });
    }

    const songindex = playlist.songs.indexOf(songid);
    if (songindex === -1) {
      return res.status(400).json({
        message: "Song Not Found in Playlist",
      });
    }

    playlist.songs.splice(songindex, 1);
    await playlist.save();

    res.status(200).json({
      message: "Song Deleted from Playlist Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
