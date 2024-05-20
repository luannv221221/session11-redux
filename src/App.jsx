import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter } from './redux/actions/counter'
// import './App.css'

function App() {
  const count = useSelector((state)=>{
    console.log("state",state);
    return state;
  })
  const dispatch = useDispatch();
  const increaseCount = ()=>{
    dispatch(increaseCounter(1));
  }
  const decreaseCount = ()=>{
    dispatch(decreaseCounter(1))
  }
  return (
    <>
      <h1>App</h1>
      <p>Count : {count.counter1}</p>
      <button onClick={increaseCount}>Tang</button>
      <button onClick={decreaseCount}>Giam</button>
    </>
  )
}

export default App
