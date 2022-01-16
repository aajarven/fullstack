import React, {useState, useEffect} from 'react';
import Persons from './components/person.js';
import PersonForm from './components/personform.js';
import FilterField from './components/filterfield.js';
import personService from './services/persons.js';

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [nameFilter, setNameFilter] = useState("")

  useEffect(
    () => {
      personService
        .getAll()
        .then(persons => {
          setPersons(persons)
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

  function updatePerson(event) {
    const oldPerson = persons.find(person => person.name === newName)
    const newPerson = {...oldPerson, number: newNumber}
    personService
      .update(oldPerson.id, newPerson)
      .then(
        updatedPerson => {
          setPersons(persons.map(person => person.id === newPerson.id ? updatedPerson : person))
          setNewName("")
          setNewNumber("")
        })
  }

  function addPerson(event) {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`Person ${newName} already found in phonebook. Update number?`)) {
        updatePerson(event)
        return
      } else {
        return
      }
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    personService
      .create(newPerson)
      .then(
        newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName("")
          setNewNumber("")
        }
      )
  }

  function deletePerson(deletedPerson) {
    if (!window.confirm(`Remove ${deletedPerson.name}?`)) {
      return
    }
    personService
      .delete(deletedPerson.id)
      .then(
        () => {
          setPersons(persons.filter(person => person.id !== deletedPerson.id))
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
      <Persons persons={shownPersons} deletePerson={deletePerson} />
    </div>
  );
}

export default App;
