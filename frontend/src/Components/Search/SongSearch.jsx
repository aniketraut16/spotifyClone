import React from "react";
import { useParams } from "react-router-dom";
function SongSearch() {
  const { word } = useParams();
  return <div>SongSearch Results of {word} </div>;
}

export default SongSearch;
