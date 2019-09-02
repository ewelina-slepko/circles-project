import React, { useEffect, useRef } from 'react';
import './App.css';
import * as d3 from 'd3';

function App() {
  return (
    <div className="App">
      <h1>d3 - trial</h1>
      <Circle id="Circle" data={['data']} />
    </div>
  );
}


function Circle({ id, data, circleX = 100, circleY = 100, radius = 60 }) {
  useEffect(() => {
    const svg = d3
      .select('#' + id)
      .append('svg')
      .attr('width', 900)
      .attr('height', 900)

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')

      .attr("cx", circleX)
      .attr("cy", circleY)
      .attr("r", radius)
      .attr('fill', '#6096BA')
      .attr('stroke', '#1C5897')
  }, []);

  return <div id={id} />;
}

export default App;
