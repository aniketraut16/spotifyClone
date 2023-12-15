const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  singer: String,
  album: String,
  duration: Number,
});

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/songs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

const SongModel = new mongoose.model("songinfo", songSchema);

module.exports = SongModel;
