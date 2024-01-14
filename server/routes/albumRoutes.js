const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const {
  addAlbum, removeAlbum, updateAlbum, getAlbumDetails
} = require("../controllers/albumController");

router.post("/backend/albums/addalbum", auth, addAlbum);
router.delete("/backend/albums/removealbum", auth, removeAlbum);
router.put("/backend/albums/updatealbum/:id", auth, updateAlbum);
router.get("/backend/albums/getalbumdetails/:id", auth, getAlbumDetails);

module.exports = router;
