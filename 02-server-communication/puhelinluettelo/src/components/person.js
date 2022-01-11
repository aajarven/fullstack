import React from 'react';

function Person({person}) {
  return (
    <div>
      <span>{person.name}</span>
      <span>{person.number}</span>
    </div>
  )
}

const Persons = ({persons}) => (
  <div>
    {persons.map(person => <Person person={person} key={person.id}/>)}
  </div>
)

export default Persons;
