import React, { useState } from 'react';

const Display = ( {counter} ) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ( {handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}


const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button text="kasvata" handleClick={increase} />
      <Button text="vähennä" handleClick={decrease} />
      <Button text="nollaa" handleClick={reset} />
    </div>
  )
}

export default App
