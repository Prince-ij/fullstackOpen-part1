import { useState } from 'react'


const Button = ({onClick, text}) => {
   return (
   <button onClick={onClick}>{text}</button>
   )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </>
  )
}

const Stats = ({good, bad, neutral}) => {
  let total = good + bad + neutral
  let average = total ? ((good * 1) +( bad * -1) + (neutral*0)) / total : 0
  let positive = total ? (good / total) * 100 : 0
  if (total) {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} />
        </table>
      </>
    ) } else {
      return (
        <>
        <h2>Statistics</h2>
        <p>No feedback has been given</p>
        </>
      )
    }

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleFeedback = (type) => () => {
    const handler = {
      good: () => setGood(good + 1),
      neutral: () => setNeutral(neutral + 1),
      bad: () => setBad(bad + 1)
    }

    handler[type]()
  }


  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleFeedback('good')} text='good' />
      <Button onClick={handleFeedback('neutral')} text='neutral' />
      <Button onClick={handleFeedback('bad')} text='bad' />
      <Stats good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
