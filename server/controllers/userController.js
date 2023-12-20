const UserModel = require("../models/UserModel");
require("../database");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userDetails = await UserModel.findOne({ email });

    if (userDetails) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const playlists = [
      {
        title: "Liked Songs",
        songs: [],
      },
    ];
    const isPremium = false;
    const newUser = new UserModel({
      name,
      email,
      hashedPassword,
      isPremium,
      playlists,
    });

    await newUser.save();

    res.status(201).json({ message: "User successfully Created" });
  } catch (error) {
    console.log(error);
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
      return res.status(200).json({
        message: "You have logged in!!",
      });
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
