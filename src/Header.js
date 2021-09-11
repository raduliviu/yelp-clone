import React from "react"
import Searchbar from "./Searchbar"
import { NavLink } from "react-router-dom"

export default function Header(props) {
    return (
        <header>
            <NavLink to="/yelp-clone"><h1 id="siteTitle">Yelp</h1></NavLink>
            <Searchbar getCuisines={props.getCuisines} getCities={props.getCities} searchResults={props.searchResults} />
        </header>
    )
}