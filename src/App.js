import './App.css';
import React, {useState, useEffect} from 'react';
import Header from "./Header"
import ResultsList from './ResultsList';

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
      lat: 35.00,
      lnt: 77.009,
      phone: "1234567",
      image: "https://blablabla.com",
      rating: "5/10",
      website: "https://blablabla.com",
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
      lat: 12344.00,
      lnt: 55.009,
      phone: "1234567",
      image: "https://blablabla.com",
      rating: "5/10",
      website: "https://blablabla.com",
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
      lat: 12344.00,
      lnt: 55.009,
      phone: "1234567",
      image: "https://blablabla.com",
      rating: "5/10",
      website: "https://blablabla.com",
    }
  ]
  const [searchResults, setSearchResults] = useState(initialData)

  useEffect(()=>{
    const getData = async () => {
      let jsonResponse = { error: "unknown" };
      let url = `https://mini-yelp-group2.herokuapp.com/restaurants`
      try {
        const response = await fetch(url, { cache: 'no-cache' })
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
      <ResultsList searchResults={searchResults}/>
    </div>
  );
}

export default App;
