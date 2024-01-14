const AlbumModel = require("../models/AlbumModel");
require("../database");

const addAlbum = async (req, res) => {
  try {
    const { name, artists } = req.body;

    const albumDetails = await AlbumModel.findOne({ name });

    if (albumDetails) {
      return res.status(409).json({ message: "Album Already Exists" });
    }

    const newAlbum = new AlbumModel({
      name,
      artists,
    });

    await newAlbum.save();

    return res.status(201).json({ message: "Album successfully added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const removeAlbum = async (req, res) => {
  try {
    const { id } = req.body;
    const albumDetails = await AlbumModel.findOne({ _id: id });

    if (!albumDetails) {
      return res.status  (404).json({ message: "Album Not Found!" });
    }

    await AlbumModel.deleteOne({ _id: id });

    return res.status(201).json({ message: "Album successfully removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the album ID is in the URL parameters
    const updatedDetails = req.body;

    const album = await AlbumModel.findByIdAndUpdate(id, updatedDetails, { new: true });

    if (!album) {
      return res.status(404).json({ message: "Album Not Found!" });
    }

    return res.status(200).json({ message: "Album details updated", album });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAlbumDetails = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the album ID is in the URL parameters

    const album = await AlbumModel.findById(id).populate('songs artists');

    if (!album) {
      return res.status(404).json({ message: "Album Not Found!" });
    }

    return res.status(200).json({ album });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addAlbum, removeAlbum, updateAlbum, getAlbumDetails };
