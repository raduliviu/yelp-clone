import React from "react";

export default function Searchbar() {
    return (
        <div className="searchBar">
            {/* <div>Find </div>
            <input className="searchInput" id="tagSearch" type="search"></input>
            <div>Near </div>
            <input className="searchInput" id="locationSearch"  type="search"></input>
            <button id="searchButton">Search</button> */}
            <form>
                <label htmlFor="cuisine-select">Find</label>
                <select name="cuisine" id="cuisine-select">
                    <option value="" defaultValue>Cuisine type</option>
                    <option value="asian">Asian</option>
                    <option value="italian">Italian</option>
                </select>
                <label htmlFor="city-select">Near</label>
                <select name="city" id="city-select">
                    <option value="" defaultValue>City</option>
                    <option value="berlin">Berlin</option>
                    <option value="hamburg">Hamburg</option>
                </select>
            </form>
        </div>
    )
}