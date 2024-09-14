import React, { useState, useEffect } from 'react';

import './App.css'; 

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);



  useEffect(() => {
    
    const data = [
      {
        "name": "United States",
        "capital": "Washington, D.C."
      },
      {
        "name": "Canada",
        "capital": "Ottawa"
      },
      {
        "name": "Brazil",
        "capital": "Brasília"
      },
      {
        "name": "United Kingdom",
        "capital": "London"
      },
      {
        "name": "Australia",
        "capital": "Canberra"
      },
      {
        "name": "Germany",
        "capital": "Berlin"
      },
      {
        "name": "France",
        "capital": "Paris"
      },
      {
        "name": "Italy",
        "capital": "Rome"
      },
      {
        "name": "Spain",
        "capital": "Madrid"
      },
      {
        "name": "Japan",
        "capital": "Tokyo"
      },
      {
        "name": "China",
        "capital": "Beijing"
      },
      {
        "name": "India",
        "capital": "New Delhi"
      },
      {
        "name": "South Africa",
        "capital": "Pretoria"
      },
      {
        "name": "Russia",
        "capital": "Moscow"
      },
      {
        "name": "Mexico",
        "capital": "Mexico City"
      },
      {
        "name": "Argentina",
        "capital": "Buenos Aires"
      },
      {
        "name": "Chile",
        "capital": "Santiago"
      },
      {
        "name": "Colombia",
        "capital": "Bogotá"
      },
      {
        "name": "Peru",
        "capital": "Lima"
      },
      {
        "name": "Egypt",
        "capital": "Cairo"
      },
      {
        "name": "Turkey",
        "capital": "Ankara"
      },
      {
        "name": "Nigeria",
        "capital": "Abuja"
      },
      {
        "name": "Kenya",
        "capital": "Nairobi"
      },
      {
        "name": "Ghana",
        "capital": "Accra"
      },
      {
        "name": "South Korea",
        "capital": "Seoul"
      },
      {
        "name": "Thailand",
        "capital": "Bangkok"
      },
      {
        "name": "Malaysia",
        "capital": "Kuala Lumpur"
      },
      {
        "name": "Vietnam",
        "capital": "Hanoi"
      },
      {
        "name": "Singapore",
        "capital": "Singapore"
      },
      {
        "name": "New Zealand",
        "capital": "Wellington"
      },
      {
        "name": "Sweden",
        "capital": "Stockholm"
      },
      {
        "name": "Norway",
        "capital": "Oslo"
      },
      {
        "name": "Finland",
        "capital": "Helsinki"
      },
      {
        "name": "Denmark",
        "capital": "Copenhagen"
      },
      {
        "name": "Ireland",
        "capital": "Dublin"
      },
      {
        "name": "Belgium",
        "capital": "Brussels"
      },
      {
        "name": "Netherlands",
        "capital": "Amsterdam"
      },
      {
        "name": "Switzerland",
        "capital": "Bern"
      },
      {
        "name": "Austria",
        "capital": "Vienna"
      },
      {
        "name": "Poland",
        "capital": "Warsaw"
      }
    ]
    
    setCountries(data);
  }, []);
  

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    
    if (value.trim() !== '') {
      const filteredSuggestions = countries.filter(country =>
        country.name.toLowerCase().includes(value.toLowerCase()) ||
        country.capital.toLowerCase().includes(value.toLowerCase())
      );
      console.log('Filtered Suggestions:', filteredSuggestions); 
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <h1>Country Search</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a country or capital..."
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((country, index) => (
              <li key={index}>
                {country.name} - {country.capital}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
