import React, { useState } from 'react';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <p>Press the buttons!</p>
  }
  return (
    <p>
      History: {props.allClicks.join(", ")}
    </p>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  debugger
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

export default App;
