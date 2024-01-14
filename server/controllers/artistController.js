const ArtistModel = require("../models/ArtistModel");
require("../database");

const addArtist = async (req, res) => {
  try {
    const { name, isVerified, monthlyListeners, genres, bio, country, followers } = req.body;
    const artistDetails = await ArtistModel.findOne({ name });

    if (artistDetails) {
      return res.status(409).json({ message: "Artist Already Exists" });
    }

    const newArtist = new ArtistModel({
      name,
      isVerified: isVerified || false,
      monthlyListeners: monthlyListeners || 0,
      genres: genres || [],
      bio: bio || "",
      country: country || "",
      followers: followers || 0,
    });

    await newArtist.save();

    return res.status(201).json({ message: "Artist successfully added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const removeArtist = async (req, res) => {
  try {
    const { id } = req.body;
    const artistDetails = await ArtistModel.findOne({ _id: id });

    if (!artistDetails) {
      return res.status(404).json({ message: "Artist Not Found!" });
    }

    await ArtistModel.deleteOne({ _id: id });

    return res.status(201).json({ message: "Artist successfully removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateArtist = async (req, res) => {
    try {
      const { id } = req.params; // Assuming the artist ID is in the URL parameters
      const updatedDetails = req.body;
  
      const artist = await ArtistModel.findByIdAndUpdate(id, updatedDetails, { new: true });
  
      if (!artist) {
        return res.status(404).json({ message: "Artist Not Found!" });
      }
  
      return res.status(200).json({ message: "Artist details updated", artist });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const getArtistDetails = async (req, res) => {
    try {
      const { id } = req.params; // Assuming the artist ID is in the URL parameters
  
      const artist = await ArtistModel.findById(id).populate('tracks albums');
  
      if (!artist) {
        return res.status(404).json({ message: "Artist Not Found!" });
      }
  
      return res.status(200).json({ artist });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
module.exports = { addArtist, removeArtist , updateArtist , getArtistDetails};
