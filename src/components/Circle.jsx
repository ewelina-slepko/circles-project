import React, { useEffect } from 'react';
import Button from './Button.jsx'
import * as d3 from 'd3';

const Circle = ({ id, amountOfCircles, setAmountOfCircles }) => {
    const myCircle = { radius: getRandomSize(), randomColor: getRandomColor(), x: 450, y: 300 }

    let simulation;

    function getRandomSize() {
        return Math.floor(Math.random() * (100 - 30 + 1)) + 30
    }

    function getRandomColor() {
        const stringToRandomColor = '0123456789ABCDEF';
        var color = '#';
        for (let i = 0; i < 6; i++) {
            color += stringToRandomColor[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        simulation = d3.forceSimulation(amountOfCircles)
            .force('charge', d3.forceManyBody().strength(100))
            .force('center', d3.forceCenter(900 / 2, 600 / 2))
            .force('collision', d3.forceCollide().radius(function (d) {
                return d.radius + 1
            }))
            .on('tick', ticked);

        function ticked() {
            console.log('tik');
            const circle = d3.select('svg')
                .selectAll('circle')
                .data(amountOfCircles)

            circle.enter()
                .append('circle')
                .attr('r', function (d) {
                    return d.radius
                })
                .attr('fill', d => d.randomColor)
                .merge(circle)
                .attr('cx', function (d) {
                    return d.x
                })
                .attr('cy', function (d) {
                    return d.y
                })
            circle.exit().remove()


            const text = d3.select('svg')
                .selectAll('text')
                .data(amountOfCircles)

            text.enter()
                .append('text')
                .attr("text-anchor", "middle")

                .attr('fill', d => d.randomColor)
                .merge(text)
                .attr('x', function (d) {
                    return d.x
                })
                .attr('y', function (d) {
                    return d.y
                })
                .attr("font-family", 'Montserrat, sans-serif')
                .attr("fill", "#fff")
                .attr("font-size", d => d.radius / 7)
                .attr('letter-spacing', '2px')
                .attr("font-weight", "200")
                .text("LOREM IPSUM")
            text.exit().remove()
        }
    });

    const addingCircle = () => {
        simulation.stop()
        setAmountOfCircles(amountOfCircles => [...amountOfCircles, myCircle])

    }

    const removingCircle = () => {
        simulation.stop()
        setAmountOfCircles(amountOfCircles => amountOfCircles.slice(0, -1))
    }

    return (
        <>
            <section style={{ margin: '20px' }}>
                <Button onClick={addingCircle}>Add circle</Button>
                <Button onClick={removingCircle}>Remove circle</Button>
            </section>
            <svg id={id} width="900" height="600"></svg>
        </>
    )
}
export default Circle;
