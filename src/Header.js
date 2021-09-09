import React from "react"
import Searchbar from "./Searchbar"

export default function Header() {
    return (
        <header>
            <h1 id="siteTitle">Yelp</h1>
            <Searchbar />
        </header>
    )
}