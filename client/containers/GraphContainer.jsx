import React, { Component } from 'react';
import RouteMap from '../components/RouteMap';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
// import DashBoard from '../containers/DashBoard';
import * as d3 from '../d3/d3';

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // hover: 'none',
      // selected: this.datasetBarChosen('all'),
      selected: null,
      getColor: d3.scale.category20(),
      color: 'lightgrey',
      pieChartData:
      [
        { category: "Sam", measure: 0.3 },
        { category: "Peter", measure: 0.25 },
        { category: "John", measure: 0.15 },
        { category: "Rick", measure: 0.05 },
        { category: "Lenny", measure: 0.18 },
        { category: "Paul", measure: 0.04 },
        { category: "Steve", measure: 0.03 }
      ],
      barChartData:
        [
          { group: 'All', category: 'Oranges', measure: 63850.4963 },
          { group: 'All', category: 'Apples', measure: 78258.0845 },
          { group: 'All', category: 'Grapes', measure: 60610.2355 },
          { group: 'All', category: 'Figs', measure: 30493.1686 },
          { group: 'All', category: 'Mangos', measure: 56097.0151 },
          { group: 'Sam', category: 'Oranges', measure: 19441.5648 },
          { group: 'Sam', category: 'Apples', measure: 25922.0864 },
          { group: 'Sam', category: 'Grapes', measure: 9720.7824 },
          { group: 'Sam', category: 'Figs', measure: 6480.5216 },
          { group: 'Sam', category: 'Mangos', measure: 19441.5648 },
          { group: 'Peter', category: 'Oranges', measure: 22913.2728 },
          { group: 'Peter', category: 'Apples', measure: 7637.7576 },
          { group: 'Peter', category: 'Grapes', measure: 23549.7526 },
          { group: 'Peter', category: 'Figs', measure: 1909.4394 },
          { group: 'Peter', category: 'Mangos', measure: 7637.7576 },
          { group: 'John', category: 'Oranges', measure: 1041.5124 },
          { group: 'John', category: 'Apples', measure: 2430.1956 },
          { group: 'John', category: 'Grapes', measure: 15275.5152 },
          { group: 'John', category: 'Figs', measure: 4166.0496 },
          { group: 'John', category: 'Mangos', measure: 11803.8072 },
          { group: 'Rick', category: 'Oranges', measure: 7406.3104 },
          { group: 'Rick', category: 'Apples', measure: 2545.9192 },
          { group: 'Rick', category: 'Grapes', measure: 1620.1304 },
          { group: 'Rick', category: 'Figs', measure: 8563.5464 },
          { group: 'Rick', category: 'Mangos', measure: 3008.8136 },
          { group: 'Lenny', category: 'Oranges', measure: 7637.7576 },
          { group: 'Lenny', category: 'Apples', measure: 35411.4216 },
          { group: 'Lenny', category: 'Grapes', measure: 8332.0992 },
          { group: 'Lenny', category: 'Figs', measure: 6249.0744 },
          { group: 'Lenny', category: 'Mangos', measure: 11803.8072 },
          { group: 'Paul', category: 'Oranges', measure: 3182.399 },
          { group: 'Paul', category: 'Apples', measure: 867.927 },
          { group: 'Paul', category: 'Grapes', measure: 1808.18125 },
          { group: 'Paul', category: 'Figs', measure: 795.59975 },
          { group: 'Paul', category: 'Mangos', measure: 578.618 },
          { group: 'Steve', category: 'Oranges', measure: 2227.6793 },
          { group: 'Steve', category: 'Apples', measure: 3442.7771 },
          { group: 'Steve', category: 'Grapes', measure: 303.77445 },
          { group: 'Steve', category: 'Figs', measure: 2328.93745 },
          { group: 'Steve', category: 'Mangos', measure: 1822.6467 }
        ],
      forceGraphData:
      [
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
      ],
      formatAsPercentage: d3.format('%'),
      formatAsInteger: d3.format(',')
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({ selected: this.datasetBarChosen('All') })
  }
  onHover = d => {
    this.setState({ hover: d });
    console.log(d);
  };

  onClick = (d, i) => {
    this.setState({
      selected: this.datasetBarChosen(d.data.category),
      color: this.state.getColor(i)
    });
    console.log(d.data.category)
    console.log(`selected: ${this.state.selected}, color: ${this.state.color}`)
  };

  datasetBarChosen = group => {
    var ds = [];
    var ds = [];
    for (let x in this.state.barChartData) {
      if (this.state.barChartData[x].group == group) {
        ds.push(this.state.barChartData[x]);
      }
    }
    return ds;
  };
  angle = d => {
    var a = ((d.startAngle + d.endAngle) * 90) / Math.PI - 90;
    return a > 90 ? a - 180 : a;
  }

  // mouseover = d => {
  //   console.log(d)
  //   d3.select(d)
  //     .select("path")
  //     .transition()
  //     .duration(750)
  //     //.attr("stroke","red")
  //     //.attr("stroke-width", 1.5)
  //     .attr("d", arcFinal3);
  // }

  // mouseout = d => {
  //   console.log(d)
  //   d3.select(d)
  //     .select("path")
  //     .transition()
  //     .duration(750)
  //     //.attr("stroke","blue")
  //     //.attr("stroke-width", 1.5)
  //     .attr("d", arcFinal);
  // }

  componentDidMount() {
    //axios call to get data from database
    console.log(this.state.barChartData)
    console.log(this.state.getColor)
    // this.setState({ selected: this.datasetBarChosen('all') });
    // console.log(this.state.color);
  }

  render() {
    return (
      <div className="graphcontainer">
        <div>
          <PieChart onClick={this.onClick} getColor={this.state.getColor} data={this.state.pieChartData} formatAsPercentage={this.state.formatAsPercentage} angle={this.angle} barChartData={this.state.selected} formatAsInteger={this.state.formatAsInteger} color={this.state.color}/>
          <BarChart data={this.state.selected} color={this.state.color} formatAsInteger={this.state.formatAsInteger}/>
        </div>
        <div>
          <h2 style={{ fontWeight: '300' }}>Routes & Middleware Map</h2>
        </div>
        <div className="routemap">
          {/* <RouteMap onHover={this.onHover} /> */}
        </div>
      </div>
    );
  }
}
export default GraphContainer;
