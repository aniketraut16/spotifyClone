const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// SongsRouts

const addSongRoute = require("./Routes/SongsRoute/addsong");
const updatesongRoute = require("./Routes/SongsRoute/updatesong");
const showsongsRoute = require("./Routes/SongsRoute/showsongs");
const deletesongRoute = require("./Routes/SongsRoute/deletesong");

// Playlist Routes

const createPlaylistRoute = require("./Routes/PlaylistRoutes/creatplaylist");
const addsongtoplaylistRoute = require("./Routes/PlaylistRoutes/addsongtoplaylist");
const playlistdetailsRoute = require("./Routes/PlaylistRoutes/playlistdetails");
const deletesongfromplaylistRoute = require("./Routes/PlaylistRoutes/deletesongfromplaylist");
const changeplaylisttitleRoute = require("./Routes/PlaylistRoutes/changeplaylisttitle");

app.use(addSongRoute);
app.use(updatesongRoute);
app.use(showsongsRoute);
app.use(deletesongRoute);

app.use(createPlaylistRoute);
app.use(addsongtoplaylistRoute);
app.use(playlistdetailsRoute);
app.use(deletesongfromplaylistRoute);
app.use(changeplaylisttitleRoute);

app.listen(8001, () => {
  console.log("Listening on port 8001");
});
