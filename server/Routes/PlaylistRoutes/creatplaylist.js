const express = require("express");
const PlaylistModel = require("../../Models/PlaylistModel");
require("../../database");
const router = express.Router();

router.post("/addplaylist", async (req, res) => {
  try {
    const { title } = req.body;
    const playlistdetails = await PlaylistModel.findOne({ title: title });
    if (playlistdetails) {
      return res.status(400).json({
        message: "Playlist Already Exists",
      });
    }
    const songs = [];
    const newPlaylist = new PlaylistModel({
      title,
      songs,
    });

    await newPlaylist.save();

    res.status(200).json({
      message: "Playlist Successfully Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
