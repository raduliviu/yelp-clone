import React from "react";

export default function Searchbar() {
    return (
        <div className="searchBar">
            <div>Find </div>
            <input className="searchInput" id="tagSearch" type="search"></input>
            <div>Near </div>
            <input className="searchInput" id="locationSearch"  type="search"></input>
            <button id="searchButton">Search</button>
        </div>
    )
}