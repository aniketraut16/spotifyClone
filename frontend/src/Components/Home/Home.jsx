import React from "react";
import Navbar from "./Navbar";
import Playlist from "./Playlist";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#000000",
      }}
    >
      <Navbar />
      <Playlist />
    </div>
  );
}

export default Home;
