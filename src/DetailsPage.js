import React from "react";
import { useParams, NavLink } from "react-router-dom";

export default function DetailsPage(props) {
    const { id } = useParams();
    const restaurantData = props.searchResults[id];
    console.log(restaurantData)
    return (
        <div>
            <NavLink to="/yelp-clone"> - Go back </NavLink>
            <img src="" alt=""></img>
            <h3>Name: {restaurantData.restaurant_name}</h3>
            <p>Restaurant type: {restaurantData.tag.name}</p>
            <p>Restaurant rating: {restaurantData.rating}</p>
            <p>Restaurant price range: {restaurantData.price_range}</p>
            <p>Restaurant city: {restaurantData.city.name}</p>
            <p>Restaurant phone: {restaurantData.phone}</p>
            <p>Restaurant website: {restaurantData.website}</p>
        </div>
    )
}