import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Playlisticon from "../Images/playlistLogo.png";
import { Clock } from "lucide-react";
import axios from "axios";
function SongSearch() {
  const { word } = useParams();
  const [songlist, setsonglist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const api = `http://localhost:8001/backend/songs/showsong/${word}`;
        const response = await axios.get(api);
        setsonglist(response.data);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [word]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div id="playlist-songs-list">
      <div id="playlist-songs-list-heading">
        <div className="playlist-songs-list-index">#</div>
        <div>Title</div>
        <div>Album</div>
        <div></div>
        <div>
          <Clock />
        </div>
      </div>
      {songlist.map((song, index) => (
        <div key={index}>
          <div className="playlist-songs-list-index">{index + 1}</div>
          <div className="playlist-songs-list-title">
            <img src={Playlisticon} alt="" />
            <div>
              <span>{song.title}</span>
              <p>{song.singer}</p>
            </div>
          </div>
          <div>{song.album}</div>
          <div></div>
          <div>{`${Math.floor(song.duration / 60)}:${song.duration % 60}`}</div>
        </div>
      ))}
    </div>
  );
}

export default SongSearch;
