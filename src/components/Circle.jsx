import React, { useEffect, useState } from 'react';
import Button from './Button.jsx'
import * as d3 from 'd3';

const Circle = ({ id }) => {
    const [counterX, setCounterX] = useState(1);
    const [counterY, setCounterY] = useState(0);
    const [amountOfCircles, setAmountOfCircles] = useState([]);

    const circleX = (d, i) => 100 + (d * 140);
    const circleY = (d, i) => counterY > 0 ? counterY * 120 : 100;
    const radius = 38;

    function getRandomColor() {
        const stringToRandomColor = '0123456789ABCDEF';
        var color = '#';
        for (let i = 0; i < 6; i++) {
            color += stringToRandomColor[Math.floor(Math.random() * 16)];
        }
        return color;
    }

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
            .attr('fill', getRandomColor())

        svg
            .selectAll('text')
            .data(amountOfCircles)
            .enter()
            .append("text")
            .style("text-anchor", "middle")
            .attr("x", circleX)
            .attr("y", circleY)
            .attr("fill", "#333333")
            .style("font-size", "10px")
            .text("Lorem Ipsum")
    });

    const addingCircle = () => {
        setCounterX(counterX < 4 ? counterX + 1 : 1)
        setCounterY(counterX === 1 ? counterY + 1 : counterY)
        setAmountOfCircles(amountOfCircles => [...amountOfCircles, counterX])

        d3.selectAll("circle")
            .transition()
            .duration(1000)
            .attr("transform", "translate(0, 30)")

        d3.selectAll("text")
            .transition()
            .ease("quad-out")
            .duration(1600)
            .delay(0)
            .attr("transform", "translate(0, 30)")
            .transition()
    }

    const removingCircle = () => {

        if (counterY >= 1) {
            d3.selectAll("circle:last-of-type").remove()
            d3.selectAll("text:last-of-type").remove()
            setAmountOfCircles(amountOfCircles => amountOfCircles.slice(0, -1))
            setCounterX(counterX > 1 ? counterX - 1 : 4)
            setCounterY(counterX === 2 ? counterY - 1 : counterY)
        } else {
            return null
        }
    }

    return (
        <>
            <section>
                <Button onClick={addingCircle}>Add circle</Button>
                <Button onClick={removingCircle}>Remove circle</Button>
            </section>

            <svg id={id} width="900" height="900"></svg>
        </>
    )
}

export default Circle;
