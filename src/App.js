import React, { useState } from 'react';
import Circle from './components/Circle.jsx'
import styles from './styles/Header.module.css'

function App() {
  const [amountOfCircles, setAmountOfCircles] = useState([]);
  return (
    <div className="App">
      <div className={styles.header}>Awesome box <span className={styles.description}>add some circles and see what happens!</span></div>
      <Circle id="Canvas" amountOfCircles={amountOfCircles} setAmountOfCircles={setAmountOfCircles} />
    </div>
  );
}

export default App;
