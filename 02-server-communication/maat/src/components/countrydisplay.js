import React from 'react';

function CountryDetails({country}) {
  return (
    <>
      <h2>{country.name.common}</h2>
      <dl>
        <dt>capital</dt>
        <dd>{country.capital}</dd>
        <dt>population</dt>
        <dd>{country.population}</dd>
      </dl>
      <h3>Languages</h3>
      <ul>
        {Object.entries(country.languages).map(lan => <li>{lan[1]}</li>)}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </>
  )
}

function CountryListItem({country, setSearchStr}) {

  return (
    <li>
      {country.name.common}
      <button type="button" onClick={() => setSearchStr(country.name.common)}>
        show
      </button>
    </li>
  )
}

function CountryList({countries, setSearchStr}) {
  return (
    <>
      <h2>Matches:</h2>
      <ul>
        {
          countries.map(
            country => (
              <CountryListItem
                key={country.name.common}
                country={country} 
                setSearchStr={setSearchStr}
              />
            )
          )
        }
      </ul>
    </>
  )
}

function CountryDisplay({countries, setSearchStr}) {
  console.log(countries)
  if (countries.length === 0) {
    return <p>No matches found</p>
  } else if (countries.length > 10) {
    return <p>Too many results, refine your search</p>
  } else if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />
  } else {
    return <CountryList countries={countries} setSearchStr={setSearchStr} />
  }
}

export default CountryDisplay
