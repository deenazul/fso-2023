import React, { useState } from "react";

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + bad + neutral;

  if (total === 0){
    return <div>No feedback given</div>;
  }

  const average = () => (good + bad) / total;
  const positive = () => (good / total) * 100 + "%";

  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average()} />
        <StatisticLine text="positive" value={positive()} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save click of button to own state
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

  // save click button into single object
  // const [click, setClick] = useState({
  //   good:0, neutral:0, bad:0
  // })

  const handleSetGood = () => {
    setGood(good+1)
  }

  const handleSetNeutral = () => {
    setBad(bad+1)
  }

  const handleSetBad = () => {
    setNeutral(neutral+1)
  }


  return (
    <div>
      <h2> give feedbacks </h2>
      <Button onClick={handleSetGood} text="good" /> 
      <Button onClick={handleSetNeutral} text="neutral" />
      <Button onClick={handleSetBad} text="bad" />
      {/* display click total */}
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/* <Statistics /> */}
    </div>
  )
}

export default App
// 3 buttons: good neutral bad, total count, on click
// update async