import React from 'react';

function Person({person, deletePerson}) {
  return (
    <>
      <dt>
        {person.name}
        <button onClick={() => deletePerson(person)}>Remove</button>
      </dt>
      <dd>
        {person.number}
      </dd>
    </>
  )
}

const Persons = ({persons, deletePerson}) => (
  <dl>
    {persons.map(person => <Person person={person} deletePerson={deletePerson} key={person.id}/>)}
  </dl>
)

export default Persons;
