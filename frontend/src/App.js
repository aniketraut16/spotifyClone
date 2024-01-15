import "./App.css";
import SignIn from "./Components/Auth/SignIn";
import LogIn from "./Components/Auth/LogIn";
import Home from "./Components/Home/Home";
import Playlist from "./Components/Home/Playlist";
import Search from "./Components/Search/Search";
import AllSearch from "./Components/Search/AllSearch";
import ArtistSearch from "./Components/Search/ArtistSearch";
import PlaylistSearch from "./Components/Search/PlaylistSearch";
import SongSearch from "./Components/Search/SongSearch";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />}>
          <Route path="playlist/:playlistId" element={<Playlist />} />
          <Route path="search" element={<Search />}>
            {/* Use an empty string as the path for the default child route */}
            <Route index element={<AllSearch />} />
            <Route path=":word/tracks" element={<SongSearch />} />
            <Route path=":word/playlists" element={<PlaylistSearch />} />
            <Route path=":word/artists" element={<ArtistSearch />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
