import React from 'react';


const Hello = (props) => (
  <>
    <p>hello {props.name}!</p>
  </>
)

const App = () => {
  const now = new Date()

  return (
    <>
      <p>Current date is {now.toString()}</p>
      <Hello name="anni"/>
      <Hello name="joku nobo"/>
    </>
  )
}

export default App;
