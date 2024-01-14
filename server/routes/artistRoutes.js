const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const {
  addArtist, removeArtist , updateArtist , getArtistDetails
} = require("../controllers/artistController");

router.post("/backend/artists/addartist", auth, addArtist);
router.delete("/backend/artists/removeartist", auth, removeArtist);
router.put("/backend/artists/updateartist/:id", auth, updateArtist);
router.get("/backend/artists/getartistdetails/:id", auth, getArtistDetails);

module.exports = router;
