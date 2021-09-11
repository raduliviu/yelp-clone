import React from "react";

export default function Result(props) {
    return (
        <li className="resultCard">
            <img src={props.result.image} alt=""></img>
            <div>
                <h4 className="resultCardName">{`${props.index+1}. ${props.result.restaurant_name}`}</h4>
                <p>{props.result.tag?.name}</p>
            </div>
        </li>
    )
}