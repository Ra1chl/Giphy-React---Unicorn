import React from "react";
import "./SearchContainer.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchContainer() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for GIFs"
        className="search-input"
      />
      <div className="search-icon">
        <SearchIcon />
      </div>
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchContainer;
