import React, { Component } from "react";
import * as d3 from "../d3/d3";


export default class RouteMap extends Component {
  state = {
    data: this.props.forceGraphData
  }
  componentDidMount() {
    // console.log(okjfgt);
    // const {selected} = this.props;
    // selected ? this.makeForceChart() : null;
    this.makeForceChart();
  }

  makeForceChart = () => {

    const {forceGraphData} = this.props;
    // console.log(forceGraphData)

    const nodes = {};
    forceGraphData.forEach(link => {

      link.source =
        nodes[link.source] || (nodes[link.source] = { name: link.source });
        // nodes[link.source]
      link.target =
        nodes[link.target] || (nodes[link.target] = { name: link.target });
        // nodes[link.target]
    });
    console.log(nodes)

    // Compute the distinct nodes from the links.


    const width = 710,
      height = 500;

    const force = d3.layout
      .force()
      .nodes(d3.values(nodes))
      .links(forceGraphData)
      .size([width, height])
      .linkDistance(11)
      .charge(-150)
      .friction(0.7)
      .gravity(0.15)
      .on("tick",tick)

      .start();

    const svg = d3
      .select("#forceGraph")
      .attr("width", width)
      .attr("height", height);


      // Per-type markers, as they don't inherit styles.
      svg
      .append("defs")
      .selectAll("marker")
      .data(["resolved", "licensing", "licensing"])
      .enter()
      .append("marker")
      .attr("id", d => d)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5");

      const path = svg
      .append("g")
      .selectAll("path")
      .data(force.links())
      .enter()
      .append("path")
      .attr("class", d => "link " + d.type)
      .attr("marker-end", d => 'url(#' + d.type + ')');


    const circle = svg
      .append("g")
      .selectAll("circle")
      .data(force.nodes())
      .enter()
      .append("circle")
      .attr("r", 6)
      .on("mouseover", this.props.onHover)
      .call(force.drag);

    const text = svg
      .append("g")
      .selectAll("text")
      .data(force.nodes())
      .enter()
      .append("text")
      .attr("x", 8)
      .attr("y", ".8em")
      .text(d => d.name);

    // Use elliptical arc path segments to doubly-encode directionality.
     function tick() {
      path.attr("d", linkArc);
      circle.attr("transform", transform);
      text.attr("transform", transform);
    }

    function linkArc(d) {
      const dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx * dx + dy * dy);
      return (
        "M" +
        d.source.x +
        "," +
        d.source.y +
        "A" +
        dr +
        "," +
        dr +
        " 0 0,1 " +
        d.target.x +
        "," +
        d.target.y
      );
    }
    function transform(d) {
      return "translate(" + d.x + "," + d.y + ")";
    }
  }
  render() {
    

    // this.makeForceChart();
    return <svg id="forceGraph" style={{ border: "2px solid #333", borderRadius: ".2em" }}/>
  }
}
