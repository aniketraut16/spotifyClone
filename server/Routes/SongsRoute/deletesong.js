const express = require("express");
const SongModel = require("../../database");
const router = express.Router();

router.delete("/deletesong", async (req, res) => {
  try {
    const { title } = req.body;
    const songDetails = await SongModel.findOne({ title });

    if (!songDetails) {
      return res.status(400).json({
        message: "Song doesn't exists",
      });
    }
    await SongModel.deleteOne({ title: title });

    res.status(200).json({
      message: "Song Deleted Succcesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
