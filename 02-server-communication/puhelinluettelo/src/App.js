import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Persons from './components/person.js';
import PersonForm from './components/personform.js';
import FilterField from './components/filterfield.js';

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [nameFilter, setNameFilter] = useState("")

  useEffect(
    () => {
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)
        })
    },
    [])

  function updateName(event) {
    setNewName(event.target.value)
  }

  function updateNumber(event) {
    setNewNumber(event.target.value)
  }

  function updateNameFilter(event) {
    setNameFilter(event.target.value)
  }

  function addPerson(event) {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`Person ${newName} already found in phonebook`)
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    axios
      .post('http://localhost:3001/persons', newPerson)
      .then(
        response => {
          setPersons(persons.concat(response.data))
          setNewName("")
          setNewNumber("")
        }
      )
  }

  const shownPersons = persons.filter( person =>
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        updateName={updateName}
        newNumber={newNumber}
        updateNumber={updateNumber}
      />

      <h2>Numbers</h2>
      <FilterField filter={nameFilter} updateFilter={updateNameFilter} />
      <Persons persons={shownPersons} />
    </div>
  );
}

export default App;
