import React, {useState} from 'react';
import Person from './components/person.js';

function App() {
  const [persons, setPersons] = useState([{name: "Arto Hellas", id: 1}])
  const [newName, setNewName] = useState("")

  function updateName(event) {
    setNewName(event.target.value)
  }

  function addPerson(event) {
    event.preventDefault()

    const newPerson = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(newPerson))
    setNewName("")
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <form onSubmit={addPerson}>
          <div>
            <span>name:</span>
            <input value={newName} onChange={updateName}/>
          </div>
          <div>
          <button type="submit">add</button>
          </div>
        </form>
      </div>

      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Person person={person} key={person.id}/>)}
      </div>
    </div>
  );
}

export default App;
