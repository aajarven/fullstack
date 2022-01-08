import React, { useState }  from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = ({reviews, reviewType}) => (
  <p>{reviewType}: {reviews[reviewType]}</p>
)

function App() {
  const [reviews, setReviews] = useState(
    {
      "good": 0,
      "neutral": 0,
      "bad": 0,
    }
  )

  function addReview(type) {
    return () => {
      setReviews(
        {
          ...reviews,
          [type]: reviews[type] + 1
        }
      )
    }
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={addReview("good")} text="good" /> 
      <Button handleClick={addReview("neutral")} text="neutral" /> 
      <Button handleClick={addReview("bad")} text="bad" /> 

      <h1>Statistics</h1>
      <Display reviews={reviews} reviewType="good" />
      <Display reviews={reviews} reviewType="neutral" />
      <Display reviews={reviews} reviewType="bad" />
    </>
  );
}

export default App;
