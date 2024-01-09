import React from "react";
import { useParams } from "react-router-dom";
function ArtistSearch() {
  const { word } = useParams();
  return <div>ArtistSearch Results of {word} </div>;
}

export default ArtistSearch;
