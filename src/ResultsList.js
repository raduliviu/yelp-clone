import React from "react";
import Result from "./Result";

export default function ResultsList(props) {
    return (
        <div className="resultsList">
            <h3>Here's what we recommend:</h3>
            <ol>
                {props.searchResults.map((result) => {
                    return <Result result={result} key={result.restaurant_name}/>
                })}
            </ol>
        </div>
    )
}