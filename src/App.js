import React, { useState } from 'react';
import './App.css';
import Circle from './components/Circle.jsx'

function App() {
  const [counterX, setCounterX] = useState(1);
  const [counterY, setCounterY] = useState(1);
  const [amountOfCircles, setAmountOfCircles] = useState([]);
  const addingCircle = () => {
    setCounterX(counterX < 5 ? counterX + 1 : 1)
    setCounterY(counterX === 1 ? counterY + 1 : counterY)
    setAmountOfCircles(amountOfCircles => [...amountOfCircles, counterX])
  }

  return (
    <div className="App">
      <h1>d3 - trial</h1>
      <button onClick={addingCircle}>Add circle</button>
      <Circle id="Canvas" amountOfCircles={amountOfCircles} counterX={counterX} counterY={counterY} />
    </div>
  );
}

export default App;
