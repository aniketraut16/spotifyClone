const express = require("express");
const router = express.Router();
const {
  createPlaylist,
  addsong,
  deletesong,
  playlistDetails,
  changeTitle,
} = require("../controllers/playlistsController");

router.post("/backend/playlists/createplaylist", createPlaylist);
router.put("/backend/playlists/addsongtoplaylist", addsong);
router.put("/backend/playlists/deletesongfromplaylist", deletesong);
router.put("/backend/playlists/changeplaylisttitle", changeTitle);
router.get("/backend/playlists/playlistdetails/:title", playlistDetails);

module.exports = router;
