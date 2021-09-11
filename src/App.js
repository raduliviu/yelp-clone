import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom"
import Header from "./Header"
import ResultsList from './ResultsList';
import DetailsPage from "./DetailsPage"

function App() {
  const initialData = [
    {
      restaurant_name: "Vapiano",
      tag: {
        id: 1,
        name: "Italian"
      },
      city: {
        id: 2,
        name: "Berlin"
      },
      price_range: "expensive",
      lat: 52.51295712182467,
      lng: 13.391373237178277,
      phone: "1234567",
      image: "https://blablabla.com",
      rating: "5/10",
      website: "https://vapiano.com",
    },
    {
      restaurant_name: "Burgeramt",
      tag: {
        id: 1,
        name: "Burger"
      },
      city: {
        id: 2,
        name: "Berlin"
      },
      price_range: "cheap",
      lat: 52.5145872638687,
      lng: 13.46038104530701,
      phone: "1234567",
      image: "https://blablabla.com",
      rating: "8/10",
      website: "https://burgeramt.com",
    },
    {
      restaurant_name: "Sahara",
      tag: {
        id: 1,
        name: "African"
      },
      city: {
        id: 2,
        name: "Berlin"
      },
      price_range: "cheap",
      lat: 52.48981395843291,
      lng: 13.428881634837806,
      phone: "1234567",
      image: "https://blablabla.com",
      rating: "10/10",
      website: "https://sahara.com",
    },
    {
      restaurant_name: "Risa",
      tag: {
        id: 1,
        name: "Chicken"
      },
      city: {
        id: 2,
        name: "Berlin"
      },
      price_range: "medium",
      lat: 52.54458123510735,
      lng: 13.411456517998799,
      phone: "1234567",
      image: "https://blablabla.com",
      rating: "7/10",
      website: "https://risachicken.com",
    }
  ]
  const [searchResults, setSearchResults] = useState(initialData)

  useEffect(() => {
    const getData = async () => {
      let jsonResponse = { error: "unknown" };
      let url = `http://mini-yelp-group2.herokuapp.com/restaurants`
      try {
        const response = await fetch(url, { cache: 'no-cache', mode: "no-cors" })
        if (response.ok) {
          jsonResponse = await response.json()
          setSearchResults(jsonResponse)
        }
      } catch (error) {
        console.log(error);
        jsonResponse.error = error.message
      }
      return jsonResponse
    }
    getData()
  }, [])



  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/yelp-clone">
          <ResultsList searchResults={searchResults} />
        </Route>
        <Route exact path="/yelp-clone/:id">
          <DetailsPage searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
