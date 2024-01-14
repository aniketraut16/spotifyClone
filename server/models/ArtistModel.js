const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  isVerified: { type: Boolean , default:false},
  monthlyListeners: { type: Number , default:0},
  genres: [{ type: String }],
  bio: { type: String },
  country: { type: String },
  followers: { type: Number,default:0},
});

const ArtistModel = mongoose.model("artistsinfo", artistSchema);
module.exports = ArtistModel;
