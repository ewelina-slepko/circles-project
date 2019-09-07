import React, { useEffect, useState } from 'react';
import Button from './Button.jsx'
import * as d3 from 'd3';

const Circle = ({ id }) => {
    const [amountOfCircles, setAmountOfCircles] = useState([]);
    let simulation;

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

        simulation = d3.forceSimulation(amountOfCircles)
            .force('charge', d3.forceManyBody().strength(100))
            .force('center', d3.forceCenter(900 / 2, 600 / 2))
            .force('collision', d3.forceCollide().radius(function (d) {
                return d.radius
            }))
            .on('tick', ticked);

        function ticked() {
            console.log('tik');
            const u = d3.select('svg')
                .selectAll('circle')
                .data(amountOfCircles)

            u.enter()
                .append('circle')
                .attr('r', function (d) {
                    return d.radius
                })
                .attr('fill', d => d.randomColor)
                .merge(u)
                .attr('cx', function (d) {
                    return d.x
                })
                .attr('cy', function (d) {
                    return d.y
                })
            u.exit().remove()


            const t = d3.select('svg')
                .selectAll('text')
                .data(amountOfCircles)

            t.enter()
                .append('text')
                .attr("text-anchor", "middle")

                .attr('fill', d => d.randomColor)
                .merge(t)
                .attr('x', function (d) {
                    return d.x
                })
                .attr('y', function (d) {
                    return d.y
                })
                .attr("fill", "#fff")
                .attr("font-size", "16px")
                .text("Lorem Ipsum")
            t.exit().remove()
        }
    });

    const addingCircle = () => {
        simulation.stop()
        setAmountOfCircles(amountOfCircles => [...amountOfCircles, { radius: 60, randomColor: getRandomColor() }])
        console.log(amountOfCircles)
    }

    const removingCircle = () => {
        setAmountOfCircles(amountOfCircles => amountOfCircles.slice(0, -1))
        console.log(amountOfCircles)
    }

    return (
        <>
            <section>
                <Button onClick={addingCircle}>Add circle</Button>
                <Button onClick={removingCircle}>Remove circle</Button>
            </section>
            <svg id={id} width="900" height="600"></svg>
        </>
    )
}
export default Circle;
