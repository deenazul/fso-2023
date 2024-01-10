// import Header from "./Header"
// import Footer from "./Footer"
// import Content from "./Content"



// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     part: [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//       {
//         name: 'State of a component',
//         exercises: 14
//     }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content part={course.part}/>
//       <Footer part={course.part}/>
//     </div>
//   )
// }

// export default App
import { useState } from 'react'
import Display from './Display'
import Button from './Button'

const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  
  return (
    <div>
      <Display counter={counter}/>
      {/* <button onClick={handleClick}>plus</button> */}
      {/* <button onClick={() => console.log('clicked')}></button> */}
      {/* <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>
        zero
      </button> */}
      <Button onClick={increaseByOne}
      text='plus'/>
      <Button onClick={setToZero}
      text='zero'/>
      <Button onClick={decreaseByOne}
      text='minus'/>
    </div>
  )


}
export default App
