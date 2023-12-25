const SongModel = require("../models/SongModel");
require("../database");

// Function to Add Song in DataBase
const addSong = async (req, res) => {
  try {
    const {
      title,
      singer,
      album,
      duration,
      genre,
      releaseDate,
      lyrics,
      isExplicit,
    } = req.body;
    const songDetails = await SongModel.findOne({ title });

    if (songDetails) {
      return res.status(409).json({
        message: "Song already exists",
      });
    }

    const newSong = new SongModel({
      title,
      singer,
      album,
      duration,
      genre,
      releaseDate,
      lyrics,
      isExplicit,
    });

    await newSong.save();

    res.status(201).json({
      message: "Song successfully added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to Delete Song from DataBase
const deleteSong = async (req, res) => {
  try {
    const id = req.params.id;
    const songDetails = await SongModel.findOne({ _id: id });

    if (!songDetails) {
      return res.status(404).json({
        message: "Song doesn't exist",
      });
    }

    await SongModel.deleteOne({ _id: id });

    res.status(200).json({
      message: "Song deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to Update Song from DataBase
const updateSong = async (req, res) => {
  try {
    const {
      title,
      singer,
      album,
      duration,
      genre,
      releaseDate,
      lyrics,
      isExplicit,
    } = req.body;
    const songDetails = await SongModel.findOne({ title });

    if (!songDetails) {
      return res.status(404).json({
        message: "Song doesn't exist",
      });
    }

    await SongModel.updateOne(
      { title },
      {
        $set: {
          singer,
          album,
          duration,
          genre,
          releaseDate,
          lyrics,
          isExplicit,
        },
      }
    );

    res.status(200).json({
      message: "Song updated successfully",
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
      return res.status(200).json({});
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
