const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const {
  createPlaylist,
  addsong,
  deletesong,
  playlistDetails,
  changeTitle,
  playlistlist
} = require("../controllers/playlistsController");

router.post("/backend/playlists/createplaylist", auth, createPlaylist);
router.put("/backend/playlists/addsongtoplaylist", auth, addsong);
router.put("/backend/playlists/deletesongfromplaylist", auth, deletesong);
router.put("/backend/playlists/changeplaylisttitle", auth, changeTitle);
router.get("/backend/playlists/playlistdetails/:id", auth, playlistDetails);
router.get("/backend/playlists/playlistlist", auth, playlistlist);


module.exports = router;
