const SongModel = require("../models/SongModel");
require("../database");

//Function to Add Song in DataBase

const addSong = async (req, res) => {
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
};

// Function to Delete Song from DataBase

const deleteSong = async (req, res) => {
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
};

// Function to Update Song from DataBase

const updateSong = async (req, res) => {
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
};

// Function to get Details of the Song from DataBase
const songDetails = async (req, res) => {
  try {
    const searchPart = req.params.part;

    if (!searchPart) {
      return res.status(400).json({ error: "Search part is required." });
    }
    const regex = new RegExp(searchPart, "i");
    const matchingSongs = await SongModel.find({ title: regex });

    res.status(200).json(matchingSongs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addSong, deleteSong, updateSong, songDetails };
