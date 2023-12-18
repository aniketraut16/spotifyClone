const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  title: String,
  songs: Array,
});

const PlaylistModel = new mongoose.model("playlistsinfo", playlistSchema);
module.exports = PlaylistModel;
