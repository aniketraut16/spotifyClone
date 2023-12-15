const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const addSongRoute = require("./Routes/addsong");

app.use(addSongRoute);

app.listen(8001, () => {
  console.log("Listening on port 8001");
});
