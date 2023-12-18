const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  singer: String,
  album: String,
  duration: Number,
});

const SongModel = new mongoose.model("songinfo", songSchema);
module.exports = SongModel;
