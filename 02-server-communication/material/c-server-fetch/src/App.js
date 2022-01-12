import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Note from './components/Note.js'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("add note")
  const [showAll, setShowAll] = useState(true)

  useEffect(
    () => {
      console.log('effective')
      axios
        .get('http://localhost:3001/notes')
        .then(response => {
          console.log('Promise fulfilled', response)
          setNotes(response.data)
        })
    },
    [])

  console.log('app rendered')

  function handleNoteChange(event) {
    setNewNote(event.target.value)
  }

  function addNote(event) {
    event.preventDefault()
    const newNoteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: true,
      id: notes.length + 1,
    }

    setNotes(notes.concat(newNoteObject))
    setNewNote("")
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} />)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App;
