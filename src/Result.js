import React from "react";

export default function Result(props) {
    return (
        <li>
            <img src="" alt=""></img>
            <p>{props.result.restaurant_name}</p>
            <p>{props.result.tag.name}</p>
        </li>
    )
}