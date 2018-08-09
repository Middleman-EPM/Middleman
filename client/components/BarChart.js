import React, { Component } from 'react';
import * as d3 from '../d3/d3';

export default class BarChart extends Component {
  componentDidMount() {
    this.makeBarChart();
  }

  dsBarChartBasics = () => {
    var margin = { top: 30, right: 5, bottom: 20, left: 50 },
      width = 500 - margin.left - margin.right,
      height = 250 - margin.top - margin.bottom,
      barPadding = 1;
    return {
      margin: margin,
      width: width,
      height: height,
      barPadding: barPadding
    };
  }

  makeBarChart = () => {
    const {data, color, formatAsInteger} = this.props;
    // console.log(data)

    var basics = this.dsBarChartBasics();

    var margin = basics.margin,
      width = basics.width,
      height = basics.height,
      barPadding = basics.barPadding;

    var xScale = d3.scale
      .linear()
      .domain([0, data.length])
      .range([0, width]);

    // Create linear y scale
    // Purpose: No matter what the data is, the bar should fit into the svg area; bars should not
    // get higher than the svg height. Hence incoming data needs to be scaled to fit into the svg area.
    var yScale = d3.scale
      .linear()
      // use the max funtion to derive end point of the domain (max value of the dataset)
      // do not use the min value of the dataset as min of the domain as otherwise you will not see the first bar
      .domain([0, d3.max(data, d => d.measure)])
      // As coordinates are always defined from the top left corner, the y position of the bar
      // is the svg height minus the data value. So you basically draw the bar starting from the top.
      // To have the y position calculated by the range function
      .range([height, 0]);

    //Create SVG element

    var svg = d3
      .select("#barChart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("id", "barChartPlot");

    var plot = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    plot
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("width", width / data.length - barPadding)
      .attr("y", d => yScale(d.measure))
      .attr("height", d => height - yScale(d.measure))
      .attr("fill", data.group==='all' ? 'lightgrey' : color);

    // Add y labels to plot

    plot
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => formatAsInteger(d3.round(d.measure)))
      .attr("text-anchor", "middle")
      // Set x position to the left edge of each bar plus half the bar width
      .attr("x", (d, i) => {
        return (
          i * (width / data.length) +
          (width / data.length - barPadding) / 2
        );
      })
      .attr("y", d => yScale(d.measure) + 14)
      .attr("class", "yAxis");


    // Add x labels to chart

    var xLabels = svg
      .append("g")
      .attr(
        "transform",
        "translate(" + margin.left + "," + (margin.top + height) + ")"
      );

    xLabels
      .selectAll("text.xAxis")
      .data(data)
      .enter()
      .append("text")
      .text(d => d.category)
      .attr("text-anchor", "middle")
      // Set x position to the left edge of each bar plus half the bar width
      .attr("x", (d, i) => {
        return (
          i * (width / data.length) +
          (width / data.length - barPadding) / 2
        );
      })
      .attr("y", 15)
      .attr("class", "xAxis");


    // Title

    svg
      .append("text")
      .attr("x", (width + margin.left + margin.right) / 2)
      .attr("y", 15)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .text("Overall Sales Breakdown 2012");
  //}
  }

  render() {
    return <svg id="barChart"></svg>
  }
}