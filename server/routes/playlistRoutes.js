const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const {
  createPlaylist,
  addsong,
  deletesong,
  playlistDetails,
  changeTitle,
} = require("../controllers/playlistsController");

router.post("/backend/playlists/createplaylist", auth, createPlaylist);
router.put("/backend/playlists/addsongtoplaylist", auth, addsong);
router.put("/backend/playlists/deletesongfromplaylist", auth, deletesong);
router.put("/backend/playlists/changeplaylisttitle", auth, changeTitle);
router.get("/backend/playlists/playlistdetails/:title", auth, playlistDetails);

module.exports = router;
