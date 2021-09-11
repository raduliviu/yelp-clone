import React from "react";

export default function Searchbar(props) {
    return (
        <div className="searchBar">
            <form>
                <label htmlFor="cuisine-select">Find</label>
                <select 
                    onChange={(e)=>{props.getCuisines(e.target.value)}}
                    name="cuisine" id="cuisine-select">
                    <option value="" defaultValue>Cuisine type</option>
                    <option value="American">American</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Vegan">Vegan</option>
                    <option value="German">German</option>
                    <option value="French">French</option>
                </select>
                <label htmlFor="city-select">Near</label>
                <select 
                    onChange={(e)=>{props.getCities(e.target.value)}}
                    name="city" id="city-select">
                    <option value="" defaultValue>City</option>
                    <option value="Frankfurt">Frankfurt</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Münich">Münich</option>
                    <option value="Bonn">Bonn</option>
                    <option value="Köln">Köln</option>
                    <option value="Stuttgart">Stuttgart</option>
                    <option value="Jenna">Jenna</option>
                    <option value="Los Angeles">Los Angeles</option>
                </select>
            </form>
        </div>
    )
}