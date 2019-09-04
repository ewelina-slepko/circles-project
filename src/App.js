import React, { useState } from 'react';
import './App.css';
import Circle from './components/Circle.jsx'

function App() {
  const [counterX, setCounterX] = useState(0);
  const [counterY, setCounterY] = useState(0);
  const [amountOfCircles, setAmountOfCircles] = useState([]);
  const addingCircle = () => {
    setCounterX(counterX < 5 ? counterX + 1 : 0)
    setCounterY(counterX === 0 ? counterY + 1 : counterY)
    setAmountOfCircles(amountOfCircles => [...amountOfCircles, counterX])
    console.log(counterY)
  }

  return (
    <div className="App">
      <h1>d3 - trial</h1>
      <button onClick={addingCircle}>Add circle</button>
      <button>Remove circle</button>
      <Circle id="Circle" amountOfCircles={amountOfCircles} counterY={counterY} />
    </div>
  );
}

export default App;
