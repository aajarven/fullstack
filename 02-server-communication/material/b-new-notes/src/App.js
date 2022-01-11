import React, {useState} from 'react';
import Note from './components/Note.js'

function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("add note")
  const [showAll, setShowAll] = useState(true)

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
