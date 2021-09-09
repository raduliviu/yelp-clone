import React from "react";
import Result from "./Result";
import { NavLink } from "react-router-dom";

export default function ResultsList(props) {
    return (
        <div className="resultsList">
            <h3>Here's what we recommend:</h3>
            <ol>
                {props.searchResults.map((result, index) => {
                    return (
                        <NavLink key={result.restaurant_name + index} to={`/yelp-clone/${index}`}>
                            <Result result={result} index={index} />
                        </NavLink>
                    )
                })}
            </ol>
        </div>
    )
}