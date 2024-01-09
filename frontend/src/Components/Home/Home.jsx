import React from "react";
import Navbar from "./Navbar";
import Playlist from "./Playlist";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#000000",
        color: "white",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
