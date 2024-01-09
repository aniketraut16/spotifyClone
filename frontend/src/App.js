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
        <Route path="/signin" exact Component={SignIn} />
        <Route path="/login" exact Component={LogIn} />
        <Route path="/" exact Component={Home}>
          <Route path="playlist/:playlistId" exact Component={Playlist} />
          <Route path="search/:word" exact Component={Search}>
            <Route path="" exact Component={AllSearch} />
            <Route path="tracks" exact Component={SongSearch} />
            <Route path="playlists" exact Component={PlaylistSearch} />
            <Route path="artists" exact Component={ArtistSearch} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
