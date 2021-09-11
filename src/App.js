import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom"
import Header from "./Header"
import ResultsList from './ResultsList';
import DetailsPage from "./DetailsPage"

function App() {
  const [searchResults, setSearchResults] = useState([])

  const [visibleResults, setVisibleResults] = useState([])

  useEffect(() => {
    const getData = async () => {
      let jsonResponse = { error: "unknown" };
      let url = `https://mini-yelp-group2.herokuapp.com/restaurants`
      try {
        const response = await fetch(url)
        if (response.ok) {
          jsonResponse = await response.json()
          console.log(jsonResponse)
          setSearchResults(jsonResponse)
          setVisibleResults(jsonResponse)
        }
      } catch (error) {
        console.log(error);
        jsonResponse.error = error.message
      }
    }
    getData()
  }, [])

  const getCuisines = (cuisine) => {
    let cuisineResults = visibleResults.filter( restaurant => restaurant.tag.name === cuisine )
    setVisibleResults(cuisineResults)
  }

  const getCities = (cityname) => {
    let cityResults = visibleResults.filter( restaurant => restaurant.city.name === cityname )
    setVisibleResults(cityResults)
  }

  return (
    <div className="App">
      <Header getCuisines={getCuisines} getCities={getCities} searchResults={searchResults}/>
      <Switch>
        <Route exact path="/yelp-clone">
          <ResultsList searchResults={visibleResults} />
        </Route>
        <Route exact path="/yelp-clone/:id">
          <DetailsPage searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
