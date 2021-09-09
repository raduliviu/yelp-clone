import React from "react";

export default function Result(props) {
    return (
        <li className="resultCard">
            <img src="https://via.placeholder.com/200" alt=""></img>
            <p>{props.result.restaurant_name}</p>
            <p>{props.result.tag.name}</p>
        </li>
    )
}