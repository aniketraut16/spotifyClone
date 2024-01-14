const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
  createdAt: { type: Date, default: Date.now }
});

const AlbumModel = mongoose.model("albumsinfo", albumSchema);
module.exports = AlbumModel;
