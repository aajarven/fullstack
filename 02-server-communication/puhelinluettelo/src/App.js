import React, {useState} from 'react';
import Persons from './components/person.js';
import PersonForm from './components/personform.js';
import FilterField from './components/filterfield.js';

function App() {
  const [persons, setPersons] = useState([{name: "Arto Hellas", number: "123456789", id: 1}])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [nameFilter, setNameFilter] = useState("")

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
    setPersons(persons.concat(newPerson))
    setNewName("")
    setNewNumber("")
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
