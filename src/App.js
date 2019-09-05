import React, { } from 'react';
import './App.css';
import Circle from './components/Circle.jsx'

function App() {
  return (
    <div className="App">
      <h1 style={{ textTransform: "uppercase" }}>Circles box</h1>
      <Circle id="Canvas" />
    </div>
  );
}

export default App;
