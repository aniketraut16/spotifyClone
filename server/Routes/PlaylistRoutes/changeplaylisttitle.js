const express = require("express");
const PlaylistModel = require("../../Models/PlaylistModel");
require("../../database");
const router = express.Router();

router.post("/changeplaylisttitle", async (req, res) => {
  try {
    const { currentTitle, newTitle } = req.body;

    // Find the playlist with the current title
    const playlist = await PlaylistModel.findOne({ title: currentTitle });

    if (!playlist) {
      return res.status(400).json({
        message: "Playlist Doesn't Exist",
      });
    }

    // Update the title of the playlist
    playlist.title = newTitle;
    await playlist.save();

    res.status(200).json({
      message: "Playlist Title Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
