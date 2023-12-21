const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  isPremium: { type: Boolean, default: false },
  isCreater: { type: Boolean, default: false },
  dateOfBirth: { type: Date },
  profilePicture: { type: String },
  bio: { type: String },
  favoriteGenres: [{ type: String }],
  lastLogin: { type: Date },
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
});

const UserModel = mongoose.model("userinfo", UserSchema);
module.exports = UserModel;
