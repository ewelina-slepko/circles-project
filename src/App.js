import React, { useState } from 'react';
import './App.css';
import Circle from './components/Circle.jsx'
import Info from './components/Info.jsx'

function App() {
  const [amountOfCircles, setAmountOfCircles] = useState([]);
  return (
    <div className="App">
      <h1 style={{ textTransform: "uppercase" }}>Circles box</h1>
      {amountOfCircles.length > 0
        ? <Circle id="Canvas" amountOfCircles={amountOfCircles} setAmountOfCircles={setAmountOfCircles} />
        : <Info />}
    </div>
  );
}

export default App;
