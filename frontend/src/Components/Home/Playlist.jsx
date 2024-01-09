import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Bell,
  User,
  ArrowDownCircle,
  Clock,
  Play,
} from "lucide-react";
import axios from "axios";
import Playlisticon from "../Images/playlistLogo.png";
import "./Playlist.css";
import { useParams } from "react-router-dom";

function Playlist() {
  const { playlistId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const api = `http://localhost:8001/backend/playlists/playlistdetails/${playlistId}`;
        const response = await axios.get(api, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [playlistId]);

  function formatDate(input) {
    const date = input instanceof Date ? input : new Date(input);
    const day = String(date.getDate()).padStart(2, "0");
    const monthAbbreviation = new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(date);
    const year = date.getFullYear();

    return `${day} ${monthAbbreviation} ${year}`;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const totalDuration = data.songs.reduce(
    (acc, song) => acc + song.duration,
    0
  );

  return (
    <div id="playlist">
      <div id="playlist-intro">
        <div id="playlist-intro-menu">
          <ChevronLeft />
          <ChevronRight className="arrow-btns" />
          <a href="#">Explore Premium</a>
          <a href="#">
            <ArrowDownCircle /> Install App
          </a>
          <Bell />
          <User />
        </div>
        <div id="playlist-info">
          <img src={Playlisticon} alt="" />
          <div>
            <p>Playlist</p>
            <h1>
              {data.title.includes("Liked Songs") ? "Liked Songs" : data.title}
            </h1>
            <p>
              aniket{" \u2022 "}
              {`${data.songs.length} songs , about ${Math.floor(
                totalDuration / 3600
              )} hr ${Math.floor((totalDuration % 3600) / 60)} min`}
            </p>
          </div>
        </div>
      </div>
      <div id="playlist-play-options">
        <div id="playlist-play-options-playbtn">
          <Play />
        </div>
      </div>
      <div id="playlist-songs-list">
        <div id="playlist-songs-list-heading">
          <div className="playlist-songs-list-index">#</div>
          <div>Title</div>
          <div>Album</div>
          <div>Date added</div>
          <div></div>
          <div>
            <Clock />
          </div>
        </div>
        {data.songs.map((song, index) => (
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
            <div>{formatDate(song.releaseDate)}</div>
            <div></div>
            <div>
              {`${Math.floor(song.duration / 60)}:${song.duration % 60}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
