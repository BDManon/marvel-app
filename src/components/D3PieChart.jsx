import { useEffect } from "react";
import * as d3 from "d3";
import { prepareData } from './chart-utils';

// Define the diameter of the pie
const diameter = 100;

// Define the margin
const margin = {
    top: 10, right: 10, bottom: 10, left: 10,
};

// Define the width and height using the margin conventions
const width = 2 * diameter + margin.left + margin.right;
const height = 2 * diameter + margin.top + margin.bottom;

// Define the radius
const radius = Math.min(width, height) / 2;

const drawChart = (data) => {
    // Remove the old svg if it exists (in development)
    d3.select('#pie-container')
        .select('svg')
        .remove();


    // TODO: draw the chart here base on example https://observablehq.com/@d3/donut-chart/2
    // Create the color scale
    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.schemeCategory10);
        // .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

    // Create the pie chart
    const pie = d3.pie()
        .value(d => d.value);

    const data_ready = pie(data);

    // Create the arc
    const arc = d3.arc()
        .innerRadius(radius * 0.5)         // This is the size of the donut hole
        .outerRadius(radius * 0.8)
        .cornerRadius(5)
        .padAngle(0.011);

    // Create the svg, with the right dimensions
    const svg = d3.select('#pie-container')
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    // Draw the donut
    svg.selectAll('path')
        .data(data_ready)
        .join('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.name))
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);

    // Add labels over the donut
    svg.selectAll('text')
        .data(data_ready)
        .join('text')

        .join("text")
            .attr("transform", d => `translate(${arc.centroid(d)})`)
            .call(text => text.append("tspan")
                .attr("x", 0)
                .attr("y", "-0.4em")
                // .attr("font-weight", "bold")
                .text(d => d.data.name))
            .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
                .attr("x", 0)
                .attr("y", "0.7em")
                .attr("fill-opacity", 0.7)
                .text(d => d.data.value.toLocaleString("en-US")));

};

export default function D3PieChart({
    data,
}) {
    // useEffect is a hook that will run the code inside it only once when data is loaded
    useEffect(() => {
        // transform data
        const preparedData = prepareData(data);

        // draw the chart
        drawChart(preparedData);
    }, [data]);

    return (
        // Return the div that will contain the chart
        <div id="pie-container" />
    );
}