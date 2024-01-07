import React, { useState, useEffect } from "react";
import Playlisticon from "../Images/playlistLogo.png";
import "./Navbar.css";
import axios from "axios";
import { Search, Home, Library, Plus, MoveRight } from "lucide-react";

function Navbar() {
  const [response, setresponse] = useState([]);

  const createPlaylist = async () => {
    try {
      await axios.post(
        "http://localhost:8001/backend/playlists/createplaylist",
        {
          title: `My Playlist #${response.length}`,
          description: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      fetchPlaylists();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPlaylists = async () => {
    try {
      const data = await axios.get(
        "http://localhost:8001/backend/playlists/playlistlist",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(data);
      setresponse(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <nav id="navbar">
      <section id="homeSearch">
        <a href="#">
          {" "}
          <Home /> Home
        </a>
        <a href="#">
          {" "}
          <Search /> Search
        </a>
      </section>
      <section id="librarysection">
        <div id="library-menu">
          {" "}
          <Library />
          Your Library <Plus id="plus" onClick={createPlaylist}/> <MoveRight id="moveright" />
        </div>

        <div className="playlist-list">
          {response.map((playlist, index) => (
            <div key={index}>
              <img src={Playlisticon} alt="ef" />
              <div className="playlist-details">
                {playlist.title.includes("Liked Songs") ? (
                  <>
                    <h3>Liked Songs</h3>
                    <p>
                      Playlist{" \u2022 "}
                      {playlist.noOfSongs}
                    </p>
                  </>
                ) : (
                  <>
                    <h3>{playlist.title}</h3>
                    <p>
                      Playlist{" \u2022 "}
                      {"aniket"}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
