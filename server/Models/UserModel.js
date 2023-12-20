const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  hashedPassword: String,
  isPremium: Boolean,
  playlists: Array,
});

const UserModel = new mongoose.model("userinfo", UserSchema);
module.exports = UserModel;
