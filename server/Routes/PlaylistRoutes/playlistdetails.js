const express = require("express");
const PlaylistModel = require("../../Models/PlaylistModel");
const SongModel = require("../../Models/SongModel");
require("../../database");
const router = express.Router();

router.get("/playlistdetails/:title", async (req, res) => {
  try {
    const title = req.params.title;

    const playlistdetails = await PlaylistModel.findOne({ title: title });

    if (!playlistdetails) {
      return res.status(400).json({
        message: "Playlist Doesn't Exist",
      });
    }

    const songlist = [];

    for (const id of playlistdetails.songs) {
      const song = await SongModel.findOne({ _id: id });
      songlist.push(song);
    }

    const dataobj = {
      title: title,
      songs: songlist,
    };
    res.status(200).json(dataobj);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
