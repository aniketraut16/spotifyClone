import React from "react";
import { useParams } from "react-router-dom";
function AllSearch() {
  const { word } = useParams();
  return <div>AllSearch Results of {word} </div>;
}

export default AllSearch;
