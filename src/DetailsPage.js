import React from "react";
import { useParams } from "react-router-dom";
import Map from "./Map"

export default function DetailsPage(props) {
    const { id } = useParams();
    const restaurantData = props.searchResults[id];
    console.log(restaurantData)
    return (
        <div className="detailsContainer">
            <h2>{restaurantData.restaurant_name}</h2>
            <div className="detailsInfo">
                <img src={restaurantData.image} alt=""></img>
                <div className="restaurantInfo">
                    <p>Restaurant type: {restaurantData.tag?.name}</p>
                    <p>Restaurant rating: {restaurantData.rating}</p>
                    <p>Restaurant price range: {restaurantData.price_range}</p>
                    <p>Restaurant city: {restaurantData.city?.name}</p>
                    <p>Restaurant phone: {restaurantData.phone}</p>
                    <p>Restaurant website: {restaurantData.website}</p>
                </div>
            </div>
            <div className="restaurantMap"><Map lat={restaurantData.lat} lng={restaurantData.lnt} /></div>
            
        </div>
    )
}