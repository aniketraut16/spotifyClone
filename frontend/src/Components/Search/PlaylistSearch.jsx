import React from "react";
import { useParams } from "react-router-dom";
function PlaylistSearch() {
  const { word } = useParams();
  return <div>PlaylistSearch Results of {word} </div>;
}

export default PlaylistSearch;
