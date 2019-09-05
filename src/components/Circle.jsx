import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Circle = ({ id,
    amountOfCircles,
    counterY,
    radius = 60,
    circleX = (d, i) => 100 + (d * 140),
    circleY = (d, i) => counterY > 0 ? counterY * 140 : 100 }) => {

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

    const remove = () => {
        d3.selectAll("circle:last-of-type").remove()
        d3.selectAll("text:last-of-type").remove()
    }

    return (
        <>
            <button onClick={remove}>Remove circle</button>
            <div />
            <svg id={id} width="900" height="900"></svg>
        </>
    )
}

export default Circle;
