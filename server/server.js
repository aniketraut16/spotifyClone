const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const addSongRoute = require("./Routes/SongsRoute/addsong");
const updatesongRoute = require("./Routes/SongsRoute/updatesong");
const showsongsRoute = require("./Routes/SongsRoute/showsongs");
const deletesongRoute = require("./Routes/SongsRoute/deletesong");
app.use(addSongRoute);
app.use(updatesongRoute);
app.use(showsongsRoute);
app.use(deletesongRoute);

app.listen(8001, () => {
  console.log("Listening on port 8001");
});
