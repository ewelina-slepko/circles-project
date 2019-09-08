import React, { useEffect, useRef, useState } from 'react';
import Button from './Button.jsx'
import styles from '../styles/Circles.module.css'
import * as d3 from 'd3'

const Circle = ({ id }) => {

    const containerWidth = window.innerWidth - (window.innerWidth / 10)
    const containerHeight = window.innerHeight - (window.innerHeight / 5)
    const myCircle = { radius: getRandomSize(), randomColor: getRandomColor(), x: containerWidth / 2, y: containerHeight / 2 }
    const [arrayOfCircles, setarrayOfCircles] = useState([]);
    const simulation = useRef();

    function getRandomSize() {
        return Math.floor(Math.random() * (60 - 30 + 1)) + 30
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
        simulation.current = d3.forceSimulation(arrayOfCircles)
            .force('charge', d3.forceManyBody().strength(100))
            .force('center', d3.forceCenter(containerWidth / 2, containerHeight / 2))
            .force('collision', d3.forceCollide().radius(function (d) {
                return d.radius + 3
            }))
            .on('tick', ticked);

        function ticked() {
            const circle = d3.select('svg')
                .selectAll('circle')
                .data(arrayOfCircles)

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
                .data(arrayOfCircles)

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
        simulation.current.stop()
        setarrayOfCircles(arrayOfCircles => [...arrayOfCircles, myCircle])
    }
    const removingCircle = () => {
        simulation.current.stop()
        setarrayOfCircles(arrayOfCircles => arrayOfCircles.slice(0, -1))
    }

    return (
        <section className={styles.container}>
            <div className={styles.btn_wrapper}>
                <Button onClick={addingCircle}>Add circle</Button>
                <Button onClick={removingCircle}>Remove circle</Button>
            </div>
            <svg className={styles.circle_box}
                id={id}
                width={containerWidth}
                height={containerHeight}>
            </svg>
        </section>
    )
}
export default Circle;
