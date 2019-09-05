import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const Circle = ({ id }) => {
    const [counterX, setCounterX] = useState(1);
    const [counterY, setCounterY] = useState(0);
    const [amountOfCircles, setAmountOfCircles] = useState([]);

    const circleX = (d, i) => 100 + (d * 140);
    const circleY = (d, i) => counterY > 0 ? counterY * 140 : 100;
    const radius = 60;

    useEffect(() => {
        const svg = d3
            .select('#' + id)
        svg
            .selectAll('circle')
            .data(amountOfCircles)
            .enter()
            .append('circle')
            .attr("cx", circleX)
            .attr("cy", circleY)
            .attr("r", radius)
            .attr("fill-opacity", 0.6)
            .attr('fill', '#6096BA')

        svg
            .selectAll('text')
            .data(amountOfCircles)
            .enter()
            .append("text")
            .style("text-anchor", "middle")
            .attr("x", circleX)
            .attr("y", circleY)
            .text("Lorem Ipsum")
    });

    const addingCircle = () => {
        setCounterX(counterX < 4 ? counterX + 1 : 1)
        setCounterY(counterX === 1 ? counterY + 1 : counterY)
        setAmountOfCircles(amountOfCircles => [...amountOfCircles, counterX])
        console.log(counterX)
        console.log(counterY)
        console.log(amountOfCircles)
    }

    const removingCircle = () => {
        d3.selectAll("circle:last-of-type").remove()
        d3.selectAll("text:last-of-type").remove()
        setAmountOfCircles(amountOfCircles => amountOfCircles.slice(0, -1))
        setCounterX(counterX > 1 ? counterX - 1 : 4)
        setCounterY(counterX === 2 ? counterY - 1 : counterY)
        console.log(counterX)
        console.log(counterY)
        console.log(amountOfCircles)
    }

    return (
        <>
            <button onClick={addingCircle}>Add circle</button>
            <button onClick={removingCircle}>Remove circle</button>
            <div />
            <svg id={id} width="900" height="900"></svg>
        </>
    )
}

export default Circle;
