import React, {useState} from 'react';
import Person from './components/person.js';

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

  const shownPersons = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <form onSubmit={addPerson}>
          <div>
            <div>
              <span>name:</span>
              <input value={newName} onChange={updateName}/>
            </div>
            <div>
              <span>number:</span>
              <input value={newNumber} onChange={updateNumber}/>
            </div>
          </div>
          <div>
          <button type="submit">add</button>
          </div>
        </form>
      </div>

      <h2>Numbers</h2>
      <div>
        <form>
          <span>search:</span>
          <input type="" value={nameFilter} onChange={updateNameFilter} />
        </form>
      </div>
      <div>
        {shownPersons.map(person => <Person person={person} key={person.id}/>)}
      </div>
    </div>
  );
}

export default App;
