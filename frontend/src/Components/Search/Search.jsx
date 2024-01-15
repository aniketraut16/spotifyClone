import React, { useState, useEffect } from "react";
import "./Search.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Bell,
  User,
  ArrowDownCircle,
  Search,
  X,
} from "lucide-react";

function SongSearch() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isValidInput = validateInput(word);
    if (word == "") {
      navigate(`${word}`);
    }
    if (isValidInput) {
      navigate(`${word}/tracks`);
    }
  }, [word, navigate]);

  const validateInput = (input) => {
    // Implement your validation logic here
    // For example, you can check if the input contains only alphanumeric characters
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(input);
  };

  return (
    <div id="Search">
      <div id="song-search-navbar">
        <div className="primary-control">
          <ChevronLeft />
          <ChevronRight />
          <div id="input-div">
            <Search />
            <input
              type="text"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
            <X />
          </div>
          <a href="#" className="rhs-primary-control">
            <ArrowDownCircle /> Install App
          </a>
          <Bell />
          <User />
        </div>
        <div className="secondary-filter">
          <Link> All </Link>
          <Link> Songs </Link>
          <Link> Album </Link>
          <Link> Artist </Link>
          <Link> Playlist </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SongSearch;
