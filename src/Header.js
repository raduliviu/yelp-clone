import React from "react"
import Searchbar from "./Searchbar"
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <NavLink to="/yelp-clone"><h1 id="siteTitle">Yelp</h1></NavLink>
            <Searchbar />
        </header>
    )
}