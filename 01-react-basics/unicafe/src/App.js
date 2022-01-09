import React, { useState }  from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticField = ({text, value}) => (
  <p>{text}: {value}</p>
)

const Statistics = ({reviews}) => {
  if (sum(reviews) === 0) {
    return <p>No reviews given</p>
  }


  function sum(dict) {
    return Object.values(dict).reduce((sum, next) => sum + next, 0)
  }

  function average(reviews) {
    return (reviews.good - reviews.bad) / sum(reviews)
  }

  function positive_percent(reviews) {
    return reviews.good / sum(reviews) * 100
  }

  return (
    <>
      <h1>Statistics</h1>
      <StatisticField text="good" value={reviews["good"]} />
      <StatisticField text="neutral" value={reviews["neutral"]}  />
      <StatisticField text="bad" value={reviews["bad"]}  />
      <StatisticField text="total" value={sum(reviews)} />
      <StatisticField text="average" value={average(reviews)} />
      <StatisticField text="positive" value={positive_percent(reviews) + " %"} />
    </>
  )
}

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

      <Statistics reviews={reviews} />
    </>
  );
}

export default App;
