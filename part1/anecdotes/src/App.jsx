import { useState } from 'react'

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>
const Votes = ({vote}) => <p> has {vote} votes</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // initialise votes state with new Array.fill
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const handleSelected = () => {
    let randomInt = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomInt)
  }

  const voteAnecdote = () => {
    const copy = [...vote]
    // increment the value in position 2 by one
    copy[selected] += 1     
    setVote(copy);
  }

  // find highest vote in array
  const highestVote = Math.max(...vote);
  // declare anecdote w highest vote to highestAnecdote variable
  const highestAnecdote = anecdotes[vote.indexOf(highestVote)];

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
        <Votes vote={vote[selected]}/>
      </div>
      <div className='button'>
        <Button onClick={voteAnecdote} text="vote"/>
        <Button onClick={handleSelected} text="next anecdote"/>
      </div>
      <div>

      <h2>Anecdote with most votes</h2>
      {highestAnecdote}
      <Votes vote={highestVote}/>
      </div>
    </div>
  )
}

export default App
