const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require("dotenv").config();

// SongsRouts
const songRoutes = require("./routes/songRoutes");

// Playlist Routes
const playlistRoute = require("./routes/playlistRoutes");

// User Routes
const userRoute = require("./routes/userRoutes");

app.use(songRoutes);
app.use(playlistRoute);
app.use(userRoute);

app.listen(8001, () => {
  console.log("Listening on port 8001");
});
