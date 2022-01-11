import React from 'react';

function Person({person}) {
  return (
    <div>
      <span>{person.name}</span>
      <span>{person.number}</span>
    </div>
  )
}

export default Person;
