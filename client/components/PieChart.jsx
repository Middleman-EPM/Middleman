import React, { Component } from 'react';
import * as d3 from '../d3/d3';

export default class PieChart extends Component {
  componentDidMount() {
    this.makePieChart();
  }

  componentDidUpdate(){
    const { barChartData, color } = this.props;
    this.updateBarChart(barChartData, color);
  }
  
  makePieChart = ({ onClick, getColor, data, formatAsPercentage, angle } = this.props) => {
    const width = 350,
      height = 350,
      outerRadius = Math.min(width, height) / 2,
      innerRadius = outerRadius * 0.999,
      // for animation
      innerRadiusFinal = outerRadius * 0.5,
      innerRadiusFinal3 = outerRadius * 0.45;
  // builtin range of colors
    // var d3_category20 = [ "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d3", "#7f7f7f", "#c7c7c7", "#bcbd32", "#dbdb8d", "#17becf", "#9edae5" ];
    const vis = d3
      .select('#pieChart')
      .data([data]) //associate our data with the document
      .attr('width', width) //set the width and height of our visualization (these will be attributes of the <svg> tag
      .attr('height', height)
      .append('svg:g') //make a group to hold our pie chart
      .attr(
        'transform',
        'translate(' + outerRadius + ',' + outerRadius + ')'
      ); //move the center of the pie chart from 0, 0 to radius, radius

    const arc = d3.svg
      .arc() //this will create <path> elements for us using arc data
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    // for animation
    const arcFinal = d3.svg
      .arc()
      .innerRadius(innerRadiusFinal)
      .outerRadius(outerRadius);
    const arcFinal3 = d3.svg
      .arc()
      .innerRadius(innerRadiusFinal3)
      .outerRadius(outerRadius);

    const pie = d3.layout
      .pie() //this will create arc data for us given a list of values
      .value(d => d.measure); //we must tell it out to access the value of each element in our data array

    const arcs = vis
      .selectAll('g.slice') //this selects all <g> elements with class slice (there aren't any yet)
      .data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
      .enter() //this will create <g> elements for every 'extra' data element that should be associated with a selection. The result is creating a <g> for every object in the data array
      .append('svg:g') //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
      .attr('class', 'slice') //allow us to style things in the slices (like text)
      // .on('mouseover', mouseover)
      // .on('mouseout', mouseout)
      .on('click', onClick); //updateBarChart()

    arcs
      .append('svg:path')
      .attr('fill', (d, i) => getColor(i)) //set the color for each slice to be chosen from the color function defined above
      .attr('d', arc) //this creates the actual SVG path using the associated data (pie) with the arc drawing function
      .append('svg:title') //mouseover title showing the figures
      .text(d => d.data.category + ': ' + formatAsPercentage(d.data.measure));

    d3.selectAll('g.slice')
      .selectAll('path')
      .transition()
      .duration(750)
      .delay(10)
      .attr('d', arcFinal);

    // Add a label to the larger arcs, translated to the arc centroid and rotated.
    // source: http://bl.ocks.org/1305337#index.html
    arcs
      .filter(d => d.endAngle - d.startAngle > 0.2)
      .append('svg:text')
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .attr('transform', d => 'translate(' + arcFinal.centroid(d) + ')rotate(' + angle(d) + ')')
      //.text(function(d) { return formatAsPercentage(d.value); })
      .text(d => d.data.category);

    // Computes the label angle of an arc, converting from radians to degrees.


    // Pie chart title
    vis
      .append('svg:text')
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text('Revenue Share 2012')
      .attr('class', 'title');
  }
  dsBarChartBasics = () => {
    const margin = { top: 30, right: 5, bottom: 20, left: 50 },
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
  updateBarChart = (group, colorChosen,  { barChartData, formatAsInteger } = this.props) => {
    const basics = this.dsBarChartBasics();

    const margin = basics.margin,
      width = basics.width,
      height = basics.height,
      barPadding = basics.barPadding;

    const xScale = d3.scale
      .linear()
      .domain([0, barChartData.length])
      .range([0, width]);

    const yScale = d3.scale
      .linear()
      .domain([0, d3.max(barChartData, d => d.measure)])
      .range([height, 0]);

    const svg = d3.select('#barChart svg');

    const plot = d3.select('#barChartPlot').datum(barChartData);

    /* Note that here we only have to select the elements - no more appending! */
    plot
      .selectAll('rect')
      .data(barChartData)
      .transition()
      .duration(750)
      .attr('x', (d, i) => xScale(i))
      .attr('width', width / barChartData.length - barPadding)
      .attr('y', d => yScale(d.measure))
      .attr('height', d => height - yScale(d.measure))
      .attr('fill', colorChosen);

    plot
      .selectAll('text.yAxis') // target the text element(s) which has a yAxis class defined
      .data(barChartData)
      .transition()
      .duration(750)
      .attr('text-anchor', 'middle')
      .attr('x', (d, i) => {
        return (
          i * (width / barChartData.length) +
          (width / barChartData.length - barPadding) / 2
        );
      })
      .attr('y', d => yScale(d.measure) + 14)
      .text(d => formatAsInteger(d3.round(d.measure)))
      .attr('class', 'yAxis');

    svg
      .selectAll('text.title') // target the text element(s) which has a title class defined
      .attr('x', (width + margin.left + margin.right) / 2)
      .attr('y', 15)
      .attr('class', 'title')
      .attr('text-anchor', 'middle')
      .text(`${group}'s Sales Breakdown 2012`);
  }
  render() {
    return <svg id="pieChart"/>
  }
}
