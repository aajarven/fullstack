import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryDisplay from './components/countrydisplay.js'


function App() {

  const [searchStr, setSearchStr] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(
    () => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
          setCountries(response.data)
        })
    },
    []
  )
 
  function updateSearchStr(event) {
    setSearchStr(event.target.value)
  }

  return (
    <div>
      <h1>Country Search</h1>
      <div>
        <form action="">
          <span>Find countries:</span>
          <input value={searchStr} onChange={updateSearchStr} />
        </form>
      </div>
      <CountryDisplay
        countries={
          countries.filter(
            country => country.name.common.toLowerCase().includes(searchStr.toLowerCase())
          )
        }
        setSearchStr={setSearchStr}
      />
    </div>
  );
}

export default App;
