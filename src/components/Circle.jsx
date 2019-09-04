import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Circle = ({ id,
    amountOfCircles,
    counterY,
    radius = 60,
    circleX = (d, i) => {
        return 100 + (d * 140)
    },
    circleY = (d, i) => {
        return counterY > 0 ? counterY * 140 : 100
    } }) => {

    // console.log(amountOfCircles)

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
            .data(amountOfCircles).enter()
            .append("text")
            .attr("xlink:href", "#wavy")
            .style("text-anchor", "middle")
            .attr("x", circleX)
            .attr("y", circleY)
            .text("Lorem Ipsum")
    });

    return (
        <>
            <div />
            <svg id={id} width="900" height="900"></svg>
        </>
    )
}

export default Circle;
