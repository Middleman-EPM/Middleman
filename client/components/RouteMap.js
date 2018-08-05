import React, { Component } from 'react';
import * as d3 from '../d3/d3';

export default class RouteMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.makeForceChart();
  }
  // componentDidUpdate(){
  //   this.makeForceChart();
  // }

  makeForceChart() {
    const links = [
      { source: "/(HOME)", target: "/taskid", type: "licensing" },
      { source: "/(HOME)", target: "/tasks", type: "licensing" },
      { source: "/(HOME)", target: "/updateTasks", type: "licensing" },
      { source: "/(HOME)", target: "/allTasks", type: "licensing" },
      { source: "/(HOME)", target: "/storiesId", type: "licensing" },
      { source: "/(HOME)", target: "/stories", type: "licensing" },
      { source: "/(HOME)", target: "/updateStories", type: "licensing" },
      { source: "/(HOME)", target: "/allStories", type: "licensing" },
      { source: "/(HOME)", target: "/boardsId", type: "licensing" },
      { source: "/(HOME)", target: "/boards", type: "licensing" },
      { source: "/(HOME)", target: "/sendInvite", type: "licensing" },
      // { source: "/(HOME)", target: '/acceptInvite', type: 'licensing' },
      // { source: "/(HOME)", target: '/rejectInvite', type: 'licensing' },
      // { source: "/(HOME)", target: '/getInvites', type: 'licensing' },

      { source: "/taskid", target: "middleware1", type: "resolved" },
      { source: "middleware1", target: "query1", type: "licensing" },
      { source: "query1", target: "expressInit1", type: "licensing" },
      {
        source: "expressInit1",
        target: "profileMiddleware1",
        type: "licensing"
      },
      {
        source: "profileMiddleware1",
        target: "corsMiddleware1",
        type: "licensing"
      },
      { source: "corsMiddleware1", target: "jsonParser1", type: "licensing" },
      { source: "jsonParser1", target: "urlencodedParser1", type: "licensing" },
      {
        source: "urlencodedParser1",
        target: "cookieParser1",
        type: "licensing"
      },
      { source: "cookieParser1", target: "serveStatic1", type: "licensing" },

      { source: "/tasks", target: "middleware2", type: "resolved" },
      { source: "middleware2", target: "query2", type: "licensing" },
      { source: "query2", target: "expressInit2", type: "licensing" },
      {
        source: "expressInit2",
        target: "profileMiddleware2",
        type: "licensing"
      },
      {
        source: "profileMiddleware2",
        target: "corsMiddleware2",
        type: "licensing"
      },
      { source: "corsMiddleware2", target: "jsonParser2", type: "licensing" },
      { source: "jsonParser2", target: "urlencodedParser2", type: "licensing" },
      {
        source: "urlencodedParser2",
        target: "cookieParser2",
        type: "licensing"
      },
      { source: "cookieParser2", target: "serveStatic2", type: "licensing" },

      { source: "/updateTasks", target: "middleware3", type: "resolved" },
      { source: "middleware3", target: "query3", type: "licensing" },
      { source: "query3", target: "expressInit3", type: "licensing" },
      {
        source: "expressInit3",
        target: "profileMiddleware3",
        type: "licensing"
      },
      {
        source: "profileMiddleware3",
        target: "corsMiddleware3",
        type: "licensing"
      },
      { source: "corsMiddleware3", target: "jsonParser3", type: "licensing" },
      { source: "jsonParser3", target: "urlencodedParser3", type: "licensing" },
      {
        source: "urlencodedParser3",
        target: "cookieParser3",
        type: "licensing"
      },
      { source: "cookieParser3", target: "serveStatic3", type: "licensing" },

      { source: "/allTasks", target: "middleware4", type: "resolved" },
      { source: "middleware4", target: "query4", type: "licensing" },
      { source: "query4", target: "expressInit4", type: "licensing" },
      {
        source: "expressInit4",
        target: "profileMiddleware4",
        type: "licensing"
      },
      {
        source: "profileMiddleware4",
        target: "corsMiddleware4",
        type: "licensing"
      },
      { source: "corsMiddleware4", target: "jsonParser4", type: "licensing" },
      { source: "jsonParser4", target: "urlencodedParser4", type: "licensing" },
      {
        source: "urlencodedParser4",
        target: "cookieParser4",
        type: "licensing"
      },
      { source: "cookieParser4", target: "serveStatic4", type: "licensing" },

      { source: "/storiesId", target: "middleware5", type: "resolved" },
      { source: "middleware5", target: "query5", type: "licensing" },
      { source: "query5", target: "expressInit5", type: "licensing" },
      {
        source: "expressInit5",
        target: "profileMiddleware5",
        type: "licensing"
      },
      {
        source: "profileMiddleware5",
        target: "corsMiddleware5",
        type: "licensing"
      },
      { source: "corsMiddleware5", target: "jsonParser5", type: "licensing" },
      { source: "jsonParser5", target: "urlencodedParser5", type: "licensing" },
      {
        source: "urlencodedParser5",
        target: "cookieParser5",
        type: "licensing"
      },
      { source: "cookieParser5", target: "serveStatic5", type: "licensing" },

      { source: "/stories", target: "middleware6", type: "resolved" },
      { source: "middleware6", target: "query6", type: "licensing" },
      { source: "query6", target: "expressInit6", type: "licensing" },
      {
        source: "expressInit6",
        target: "profileMiddleware6",
        type: "licensing"
      },
      {
        source: "profileMiddleware6",
        target: "corsMiddleware6",
        type: "licensing"
      },
      { source: "corsMiddleware6", target: "jsonParser6", type: "licensing" },
      { source: "jsonParser6", target: "urlencodedParser6", type: "licensing" },
      {
        source: "urlencodedParser6",
        target: "cookieParser6",
        type: "licensing"
      },
      { source: "cookieParser6", target: "serveStatic6", type: "licensing" },

      { source: "/updateStories", target: "middleware7", type: "resolved" },
      { source: "middleware7", target: "query7", type: "licensing" },
      { source: "query7", target: "expressInit7", type: "licensing" },
      {
        source: "expressInit7",
        target: "profileMiddleware7",
        type: "licensing"
      },
      {
        source: "profileMiddleware7",
        target: "corsMiddleware7",
        type: "licensing"
      },
      { source: "corsMiddleware7", target: "jsonParser7", type: "licensing" },
      { source: "jsonParser7", target: "urlencodedParser7", type: "licensing" },
      {
        source: "urlencodedParser7",
        target: "cookieParser7",
        type: "licensing"
      },
      { source: "cookieParser7", target: "serveStatic7", type: "licensing" },

      { source: "/allStories", target: "middleware8", type: "resolved" },
      { source: "middleware8", target: "query8", type: "licensing" },
      { source: "query8", target: "expressInit8", type: "licensing" },
      {
        source: "expressInit8",
        target: "profileMiddleware8",
        type: "licensing"
      },
      {
        source: "profileMiddleware8",
        target: "corsMiddleware8",
        type: "licensing"
      },
      { source: "corsMiddleware8", target: "jsonParser8", type: "licensing" },
      { source: "jsonParser8", target: "urlencodedParser8", type: "licensing" },
      {
        source: "urlencodedParser8",
        target: "cookieParser8",
        type: "licensing"
      },
      { source: "cookieParser8", target: "serveStatic8", type: "licensing" },

      { source: "/boardsId", target: "middleware9", type: "resolved" },
      { source: "middleware9", target: "query9", type: "licensing" },
      { source: "query9", target: "expressInit9", type: "licensing" },
      {
        source: "expressInit9",
        target: "profileMiddleware9",
        type: "licensing"
      },
      {
        source: "profileMiddleware9",
        target: "corsMiddleware9",
        type: "licensing"
      },
      { source: "corsMiddleware9", target: "jsonParser9", type: "licensing" },
      { source: "jsonParser9", target: "urlencodedParser9", type: "licensing" },
      {
        source: "urlencodedParser9",
        target: "cookieParser9",
        type: "licensing"
      },
      { source: "cookieParser9", target: "serveStatic9", type: "licensing" },

      { source: "/boards", target: "middleware10", type: "resolved" },
      { source: "middleware10", target: "query10", type: "licensing" },
      { source: "query10", target: "expressInit10", type: "licensing" },
      {
        source: "expressInit10",
        target: "profileMiddleware10",
        type: "licensing"
      },
      {
        source: "profileMiddleware10",
        target: "corsMiddleware10",
        type: "licensing"
      },
      { source: "corsMiddleware10", target: "jsonParser10", type: "licensing" },
      {
        source: "jsonParser10",
        target: "urlencodedParser10",
        type: "licensing"
      },
      {
        source: "urlencodedParser10",
        target: "cookieParser10",
        type: "licensing"
      },
      { source: "cookieParser10", target: "serveStatic10", type: "licensing" }

      // { source: "/sendInvite", target: "middleware", type: "resolved" },
      // { source: "middleware", target: "query", type: "licensing" },
      // { source: "query", target: "expressInit", type: "licensing" },
      // { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      // { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      // { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      // { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      // { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      // { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      // { source: "/acceptInvite", target: "middleware", type: "resolved" },
      // { source: "middleware", target: "query", type: "licensing" },
      // { source: "query", target: "expressInit", type: "licensing" },
      // { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      // { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      // { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      // { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      // { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      // { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      // { source: "/rejectInvite", target: "middleware", type: "resolved" },
      // { source: "middleware", target: "query", type: "licensing" },
      // { source: "query", target: "expressInit", type: "licensing" },
      // { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      // { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      // { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      // { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      // { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      // { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      // { source: "/getInvites", target: "middleware", type: "resolved" },
      // { source: "middleware", target: "query", type: "licensing" },
      // { source: "query", target: "expressInit", type: "licensing" },
      // { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      // { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      // { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      // { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      // { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      // { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },
    ];

    const nodes = {};

    // Compute the distinct nodes from the links.
    links.forEach(function(link) {
      link.source =
        nodes[link.source] || (nodes[link.source] = { name: link.source });
      link.target =
        nodes[link.target] || (nodes[link.target] = { name: link.target });
    });

    const width = 710,
      height = 500;

    const force = d3.layout
      .force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(13)
      .charge(-150)
      .friction(0.75)
      .gravity(0.1)
      .on("tick", tick)

      .start();

    const svg = d3
      .select("#svgTest")
      .attr("width", width)
      .attr("height", height);

    // Per-type markers, as they don't inherit styles.
    svg
      .append("defs")
      .selectAll("marker")
      .data(["resolved", "licensing", "licensing"])
      .enter()
      .append("marker")
      .attr("id", function(d) {
        return d;
      })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 25)
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
      .attr("class", function(d) {
        return "link " + d.type;
      })
      .attr("marker-end", function(d) {
        return "url(#" + d.type + ")";
      });

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
      .text(function(d) {
        return d.name;
      });

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
    return (
      <div
        className="Test"
        style={{
          boxShadow: "0px 1px 5px 1px",
          height: "60%",
          width: "60%",
          position: "relative"
        }}
      >
        <svg id="svgTest"> </svg>
      </div>
    );
  }
}
