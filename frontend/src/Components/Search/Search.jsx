import React from "react";
import { useParams, Outlet } from "react-router-dom";
function Search() {
  const { word } = useParams();
  return (
    <div>
      <h1>SearchBox</h1>
      <Outlet />
    </div>
  );
}

export default Search;
