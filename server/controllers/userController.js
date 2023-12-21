const UserModel = require("../models/UserModel");
require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const axios = require("axios");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userDetails = await UserModel.findOne({ email });

    if (userDetails) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new UserModel({
      name,
      email,
      hashedPassword,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, SECRET_KEY);
    const likedSongs = {
      title: `${name}'s Liked Songs`,
      songs: [],
      public: false,
      createdBy: newUser._id,
    };

    try {
      // Error handling for playlist creation
      const playlistId = await axios.post(
        `${process.env.BASEURL}/backend/playlists/createplaylist`,
        likedSongs
      );
      console.log(playlistId);
      newUser.playlists.push(playlistId.data.id);
      await newUser.save();

      res.status(201).json({ user: newUser, token: token });
    } catch (playlistError) {
      console.error("Error creating playlist:", playlistError.message);
      res.status(500).json({ message: "Error creating playlist" });
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDetails = await UserModel.findOne({ email });

    if (!userDetails) {
      return res.status(400).json({ message: "User Doesn't Exists" });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      userDetails.hashedPassword
    );

    if (passwordMatch) {
      const token = jwt.sign({ id: userDetails._id }, SECRET_KEY);
      res.status(200).json({ user: userDetails, token: token });
    } else {
      return res.status(400).json({
        message: "Please Check Password!!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { login, createUser };
