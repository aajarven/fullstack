import React from 'react';

function Person({person}) {
  return (
    <>
      <dt>
        {person.name}
      </dt>
      <dd>
        {person.number}
      </dd>
    </>
  )
}

const Persons = ({persons}) => (
  <dl>
    {persons.map(person => <Person person={person} key={person.id}/>)}
  </dl>
)

export default Persons;
