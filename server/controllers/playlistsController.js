const PlaylistModel = require("../models/PlaylistModel");
const SongModel = require("../models/SongModel");
const UserModel = require("../models/UserModel")
require("../database");

const createPlaylist = async (req, res) => {
  try {
    const { title, description } = req.body;
    const createdBy = req.createdBy;
    const playlistdetails = await PlaylistModel.findOne({
      title: title,
      createdBy: createdBy,
    });
    if (playlistdetails) {
      return res.status(400).json({
        message: "Playlist Already Exists",
      });
    }
    const songs = [];
    const newPlaylist = new PlaylistModel({
      title,
      description,
      createdBy,
      songs,
    });

    await newPlaylist.save();

    await UserModel.updateOne({ _id: createdBy },{$push:{playlists:newPlaylist._id}});

    res.status(200).json({
      message: "Playlist Successfully Created",
      id: newPlaylist._id,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
const addsong = async (req, res) => {
  try {
    const { title, songid } = req.body;
    const playlistdetails = await PlaylistModel.findOne({
      title: title,
      createdBy: req.createdBy,
    });

    if (!playlistdetails) {
      return res.status(400).json({
        message: "Playlist Doesn't Exist",
      });
    }

    if (playlistdetails.songs.includes(songid)) {
      return res.status(400).json({
        message: "Song Already Exists in the Playlist",
      });
    }

    await PlaylistModel.updateOne(
      { title: title, createdBy: req.createdBy },
      { $push: { songs: songid } }
    );

    res.status(200).json({
      message: "Song Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deletesong = async (req, res) => {
  try {
    const { title, songid } = req.body;
    const playlist = await PlaylistModel.findOne({
      title: title,
      createdBy: req.createdBy,
    });
    if (!playlist) {
      return res.status(400).json({
        message: "Playlist Doesn't Exist",
      });
    }

    const songindex = playlist.songs.indexOf(songid);
    if (songindex === -1) {
      return res.status(400).json({
        message: "Song Not Found in Playlist",
      });
    }

    playlist.songs.splice(songindex, 1);
    await playlist.save();

    res.status(200).json({
      message: "Song Deleted from Playlist Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const playlistDetails = async (req, res) => {
  try {
    const id = req.params.id;

    const playlistdetails = await PlaylistModel.findOne({
      _id: id,
      createdBy: req.createdBy,
    });

    if (!playlistdetails) {
      return res.status(400).json({
        message: "Playlist Doesn't Exist",
      });
    }

    const songlist = [];

    for (const id of playlistdetails.songs) {
      const song = await SongModel.findOne({ _id: id });
      songlist.push(song);
    }

    const dataobj = {
      title: playlistdetails.title,
      description:playlistdetails.description,
      songs: songlist,
    };
    res.status(200).json(dataobj);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const changeTitle = async (req, res) => {
  try {
    const { currentTitle, newTitle } = req.body;

    // Find the playlist with the current title
    const playlist = await PlaylistModel.findOne({
      title: currentTitle,
      createdBy: req.createdBy,
    });

    if (!playlist) {
      return res.status(400).json({
        message: "Playlist Doesn't Exist",
      });
    }

    // Update the title of the playlist
    playlist.title = newTitle;
    await playlist.save();

    res.status(200).json({
      message: "Playlist Title Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const playlistlist = async (req, res) => {
  try {
    const userid = req.createdBy;
    const userdata = await UserModel.findOne({ _id: userid });
    const playlist_list = [];
    for (const playlistid of userdata.playlists) {
      const playlistdetails = await PlaylistModel.findOne({ _id: playlistid });
      const data = {
        id: playlistdetails._id,
        title: playlistdetails.title,
        noOfSongs: playlistdetails.songs.length,
      };
      playlist_list.push(data);
    }
    res.status(200).json(playlist_list);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  createPlaylist,
  addsong,
  deletesong,
  playlistDetails,
  changeTitle,
  playlistlist
};
