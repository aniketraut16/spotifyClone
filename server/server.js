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

// Artist Routes
const artistRoute = require("./routes/artistRoutes");

// Album Routes
const albumRoute = require("./routes/albumRoutes");

app.use(songRoutes);
app.use(playlistRoute);
app.use(userRoute);
app.use(artistRoute)
app.use(albumRoute)

app.listen(8001, () => {
  console.log("Listening on port 8001");
});
