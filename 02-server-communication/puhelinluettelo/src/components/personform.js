import React from 'react';

function PersonForm({addPerson, newName, updateName, newNumber, updateNumber}) {
  return (
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
  )
}

export default PersonForm
