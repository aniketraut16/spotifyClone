const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
  album: { type: String },
  duration: { type: Number, required: true },
  genre: { type: String },
  releaseDate: { type: Date },
  lyrics: { type: String },
  isExplicit: { type: Boolean, default: false },
});

const SongModel = mongoose.model("songinfo", songSchema);
module.exports = SongModel;
