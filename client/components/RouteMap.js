import * as d3 from '../d3/d3';
import React, {Component} from 'react';

export default class RouteMap extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){
    this.makeForceChart();
  }
  // componentDidUpdate(){
  //   this.makeForceChart();
  // }


  makeForceChart() {

    const links = [
      // { source: "/(HOME)", target: '/taskid', type: 'licensing'},
      // { source: "/(HOME)", target: '/tasks', type: 'licensing' },
      // { source: "/(HOME)", target: '/updateTasks', type: 'licensing'},
      // { source: "/(HOME)", target: '/alltasks', type: 'licensing' },
      // { source: "/(HOME)", target: '/storiesId', type: 'licensing' },
      // { source: "/(HOME)", target: '/stories', type: 'licensing' },
      // { source: "/(HOME)", target: '/updateStories', type: 'licensing' },
      // { source: "/(HOME)", target: '/allStories', type: 'licensing' },
      // { source: "/(HOME)", target: '/boardsId', type: 'licensing' },
      // { source: "/(HOME)", target: '/boards', type: 'licensing' },
      // { source: "/(HOME)", target: '/sendInvite', type: 'licensing' },
      // { source: "/(HOME)", target: '/acceptInvite', type: 'licensing' },
      // { source: "/(HOME)", target: '/rejectInvite', type: 'licensing' },
      // { source: "/(HOME)", target: '/getInvites', type: 'licensing' },


      { source: "/taskid", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing"},
      { source: "query", target: "expressInit", type: "licensing"},
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing'},
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing'},
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing'},
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing'},
      {source: 'urlencodedParser', target: 'cookieParser', type: 'licensing'},
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing'},

      { source: "/tasks", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/updateTasks", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/allTasks", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/storiesId", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/stories", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/updateStories", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/allStories", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/boardsId", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/boards", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/sendInvite", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/acceptInvite", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/rejectInvite", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

      { source: "/getInvites", target: "middleware", type: "licensing" },
      { source: "middleware", target: "query", type: "licensing" },
      { source: "query", target: "expressInit", type: "licensing" },
      { source: "expressInit", target: 'profileMiddleware', type: 'licensing' },
      { source: "profileMiddleware", target: 'corsMiddleware', type: 'licensing' },
      { source: "corsMiddleware", target: 'jsonParser', type: 'licensing' },
      { source: 'jsonParser', target: 'urlencodedParser', type: 'licensing' },
      { source: 'urlencodedParser', target: 'cookieParser', type: 'licensing' },
      { source: 'cookieParser', target: 'serveStatic', type: 'licensing' },

    ];

    const nodes = {};

    // Compute the distinct nodes from the links.
    links.forEach(function (link) {
      link.source = nodes[link.source] || (nodes[link.source] = { name: link.source });
      link.target = nodes[link.target] || (nodes[link.target] = { name: link.target });
    });

    const width = 710,
      height = 500;

    const force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(60)
      .charge(-300)
      .on("tick", tick)
      .start();

    const svg = d3.select("#svgTest")
      .attr("width", width)
      .attr("height", height);

    // Per-type markers, as they don't inherit styles.
    svg.append("defs").selectAll("marker")
      .data(["suit", "licensing", "licensing"])
      .enter().append("marker")
      .attr("id", function (d) { return d; })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 25)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5");



    const path = svg.append("g").selectAll("path")
      .data(force.links())
      .enter().append("path")
      .attr("class", function (d) { return "link " + d.type; })
      .attr("marker-end", function (d) { return "url(#" + d.type + ")"; });

    const circle = svg.append("g").selectAll("circle")
      .data(force.nodes())
      .enter().append("circle")
      .attr("r", 10)
      .on('mouseover', this.props.onHover)
      .call(force.drag);

    const text = svg.append("g").selectAll("text")
      .data(force.nodes())
      .enter().append("text")
      .attr("x", 8)
      .attr("y", ".8em")
      .text(function (d) { return d.name; });

    // Use elliptical arc path segments to doubly-encode directionality.
    function tick() {
      path.attr("d", linkArc);
      circle.attr("transform", transform);
      text.attr("transform", transform);
    }

    function linkArc(d) {
      const dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx*1.5 * dx + dy * dy*1.5);
      return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    }

    function transform(d) {
      return "translate(" + d.x + "," + d.y + ")";
    }
  }
  render() {
    return <div className="Test" style={{ boxShadow: '0px 1px 5px 1px', height: '60%', width: '60%', position: 'relative' }}>
        <svg id="svgTest"> </svg>
      </div>;
  }
}
