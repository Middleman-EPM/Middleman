import React, { Component } from "react";
import RouteMap from "../components/RouteMap";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import StoryForceGraph from "../components/StoryForceGraph";
import Collapsible from "../components/Collapsible";
import * as d3 from "../d3/d3";

// button config
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none"
  }
});

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      getColor: d3.scale.category20(),
      color: "darkgray",
      selectedGraph: "Collapsible",
      pieChartData: [
        { category: "/boardsid_post", measure: "0.03" },
        { category: "/boards_delete", measure: "0.04" },
        { category: "/boards_post", measure: "0.03" },
        { category: "/getinvites_post", measure: "0.04" },
        { category: "/authuser_post", measure: "0.82" },
        { category: "/favicon.ico_get", measure: "0.04" }
      ],
      barChartData: [
        {
          group: "/boardsid_post",
          category: "jsonParser",
          measure: 0.102574
        },
        {
          group: "/boardsid_post",
          category: "corsMiddleware",
          measure: 0.237469
        },
        {
          group: "/boardsid_post",
          category: "profilerMiddleware",
          measure: 0.906912
        },
        {
          group: "/boardsid_post",
          category: "expressInit",
          measure: 1.082926
        },
        { group: "/boardsid_post", category: "query", measure: 1.351763 },
        {
          group: "/boardsid_post",
          category: "getBoards",
          measure: 0.008109
        },
        {
          group: "/boardsid_post",
          category: "serveStatic",
          measure: 0.485231
        },
        {
          group: "/boardsid_post",
          category: "cookieParser",
          measure: 1.092602
        },
        {
          group: "/boardsid_post",
          category: "urlencodedParser",
          measure: 1.855163
        },
        {
          group: "/boards_delete",
          category: "jsonParser",
          measure: 0.063341
        },
        {
          group: "/boards_delete",
          category: "corsMiddleware",
          measure: 0.174951
        },
        {
          group: "/boards_delete",
          category: "profilerMiddleware",
          measure: 0.78831
        },
        {
          group: "/boards_delete",
          category: "expressInit",
          measure: 0.963306
        },
        { group: "/boards_delete", category: "query", measure: 1.514632 },
        {
          group: "/boards_delete",
          category: "deleteBoard",
          measure: 0.065313
        },
        {
          group: "/boards_delete",
          category: "serveStatic",
          measure: 0.587934
        },
        {
          group: "/boards_delete",
          category: "cookieParser",
          measure: 1.263992
        },
        {
          group: "/boards_delete",
          category: "urlencodedParser",
          measure: 2.529822
        },
        {
          group: "/boards_post",
          category: "jsonParser",
          measure: 0.121004
        },
        {
          group: "/boards_post",
          category: "corsMiddleware",
          measure: 0.252525
        },
        {
          group: "/boards_post",
          category: "profilerMiddleware",
          measure: 1.003748
        },
        {
          group: "/boards_post",
          category: "expressInit",
          measure: 1.193256
        },
        { group: "/boards_post", category: "query", measure: 1.440579 },
        {
          group: "/boards_post",
          category: "addBoard",
          measure: 0.015151
        },
        {
          group: "/boards_post",
          category: "serveStatic",
          measure: 0.484226
        },
        {
          group: "/boards_post",
          category: "cookieParser",
          measure: 1.18062
        },
        {
          group: "/boards_post",
          category: "urlencodedParser",
          measure: 2.083052
        },
        {
          group: "/getinvites_post",
          category: "jsonParser",
          measure: 0.184367
        },
        {
          group: "/getinvites_post",
          category: "corsMiddleware",
          measure: 0.331266
        },
        {
          group: "/getinvites_post",
          category: "profilerMiddleware",
          measure: 1.04041
        },
        {
          group: "/getinvites_post",
          category: "expressInit",
          measure: 1.221983
        },
        {
          group: "/getinvites_post",
          category: "query",
          measure: 1.464821
        },
        {
          group: "/getinvites_post",
          category: "getInvites",
          measure: 0.018077
        },
        {
          group: "/getinvites_post",
          category: "serveStatic",
          measure: 0.663388
        },
        {
          group: "/getinvites_post",
          category: "cookieParser",
          measure: 1.432402
        },
        {
          group: "/getinvites_post",
          category: "urlencodedParser",
          measure: 2.403687
        },
        {
          group: "/authuser_post",
          category: "jsonParser",
          measure: 7.990784
        },
        {
          group: "/authuser_post",
          category: "corsMiddleware",
          measure: 11.2075
        },
        {
          group: "/authuser_post",
          category: "profilerMiddleware",
          measure: 12.478192
        },
        {
          group: "/authuser_post",
          category: "expressInit",
          measure: 12.718969
        },
        {
          group: "/authuser_post",
          category: "query",
          measure: 12.999055
        },
        {
          group: "/authuser_post",
          category: "authenticateUser",
          measure: 22.958902
        },
        {
          group: "/authuser_post",
          category: "app.post",
          measure: 23.55054
        },
        {
          group: "/authuser_post",
          category: "serveStatic",
          measure: 24.370452
        },
        {
          group: "/authuser_post",
          category: "cookieParser",
          measure: 26.658626
        },
        {
          group: "/authuser_post",
          category: "urlencodedParser",
          measure: 27.865474
        },
        {
          group: "/favicon.ico_get",
          category: "serveStatic",
          measure: 0.130055
        },
        {
          group: "/favicon.ico_get",
          category: "cookieParser",
          measure: 0.26357
        },
        {
          group: "/favicon.ico_get",
          category: "urlencodedParser",
          measure: 0.377825
        },
        {
          group: "/favicon.ico_get",
          category: "jsonParser",
          measure: 0.552215
        },
        {
          group: "/favicon.ico_get",
          category: "corsMiddleware",
          measure: 0.807935
        },
        {
          group: "/favicon.ico_get",
          category: "profilerMiddleware",
          measure: 1.592888
        },
        {
          group: "/favicon.ico_get",
          category: "expressInit",
          measure: 2.047174
        },
        {
          group: "/favicon.ico_get",
          category: "query",
          measure: 2.643071
        }
      ],
      forceGraphData: [ { source: '/', target: '/tasksid', type: 'licensing' },
      { source: '/tasksid', target: '/tasksid_post', type: 'resolved' },
      { source: '/', target: '/tasks', type: 'licensing' },
      { source: '/tasks', target: '/tasks_delete', type: 'resolved' },
      { source: '/', target: '/updatetasks', type: 'licensing' },
      { source: '/updatetasks',
        target: '/updatetasks_post',
        type: 'resolved' },
      { source: '/', target: '/alltasks', type: 'licensing' },
      { source: '/alltasks',
        target: '/alltasks_get',
        type: 'resolved' },
      { source: '/', target: '/storiesid', type: 'licensing' },
      { source: '/storiesid',
        target: '/storiesid_post',
        type: 'resolved' },
      { source: '/', target: '/stories', type: 'licensing' },
      { source: '/stories',
        target: '/stories_delete',
        type: 'resolved' },
      { source: '/', target: '/updatestories', type: 'licensing' },
      { source: '/updatestories',
        target: '/updatestories_post',
        type: 'resolved' },
      { source: '/', target: '/allstories', type: 'licensing' },
      { source: '/allstories',
        target: '/allstories_get',
        type: 'resolved' },
      { source: '/', target: '/boardsid', type: 'licensing' },
      { source: '/boardsid',
        target: '/boardsid_post',
        type: 'resolved' },
      { source: '/boardsid_post',
        target: 'jsonParser_/boardsid',
        type: 'licensing' },
      { source: 'jsonParser_/boardsid',
        target: 'corsMiddleware_/boardsid',
        type: 'licensing' },
      { source: 'corsMiddleware_/boardsid',
        target: 'profilerMiddleware_/boardsid',
        type: 'licensing' },
      { source: 'profilerMiddleware_/boardsid',
        target: 'expressInit_/boardsid',
        type: 'licensing' },
      { source: 'expressInit_/boardsid',
        target: 'query_/boardsid',
        type: 'licensing' },
      { source: 'query_/boardsid',
        target: 'getBoards_/boardsid',
        type: 'licensing' },
      { source: 'getBoards_/boardsid',
        target: 'serveStatic_/boardsid',
        type: 'licensing' },
      { source: 'serveStatic_/boardsid',
        target: 'cookieParser_/boardsid',
        type: 'licensing' },
      { source: 'cookieParser_/boardsid',
        target: 'urlencodedParser_/boardsid',
        type: 'licensing' },
      { source: '/', target: '/boards', type: 'licensing' },
      { source: '/boards', target: '/boards_delete', type: 'resolved' },
      { source: '/boards_delete',
        target: 'jsonParser_/boards',
        type: 'licensing' },
      { source: 'jsonParser_/boards',
        target: 'corsMiddleware_/boards',
        type: 'licensing' },
      { source: 'corsMiddleware_/boards',
        target: 'profilerMiddleware_/boards',
        type: 'licensing' },
      { source: 'profilerMiddleware_/boards',
        target: 'expressInit_/boards',
        type: 'licensing' },
      { source: 'expressInit_/boards',
        target: 'query_/boards',
        type: 'licensing' },
      { source: 'query_/boards',
        target: 'deleteBoard_/boards',
        type: 'licensing' },
      { source: 'deleteBoard_/boards',
        target: 'serveStatic_/boards',
        type: 'licensing' },
      { source: 'serveStatic_/boards',
        target: 'cookieParser_/boards',
        type: 'licensing' },
      { source: 'cookieParser_/boards',
        target: 'urlencodedParser_/boards',
        type: 'licensing' },
      { source: '/', target: '/boards', type: 'licensing' },
      { source: '/boards', target: '/boards_post', type: 'resolved' },
      { source: '/boards_delete',
        target: 'jsonParser_/boards',
        type: 'licensing' },
      { source: 'jsonParser_/boards',
        target: 'corsMiddleware_/boards',
        type: 'licensing' },
      { source: 'corsMiddleware_/boards',
        target: 'profilerMiddleware_/boards',
        type: 'licensing' },
      { source: 'profilerMiddleware_/boards',
        target: 'expressInit_/boards',
        type: 'licensing' },
      { source: 'expressInit_/boards',
        target: 'query_/boards',
        type: 'licensing' },
      { source: 'query_/boards',
        target: 'addBoard_/boards',
        type: 'licensing' },
      { source: 'addBoard_/boards',
        target: 'serveStatic_/boards',
        type: 'licensing' },
      { source: 'serveStatic_/boards',
        target: 'cookieParser_/boards',
        type: 'licensing' },
      { source: 'cookieParser_/boards',
        target: 'urlencodedParser_/boards',
        type: 'licensing' },
      { source: '/', target: '/sendInvite', type: 'licensing' },
      { source: '/sendInvite',
        target: '/sendInvite_post',
        type: 'resolved' },
      { source: '/', target: '/acceptInvite', type: 'licensing' },
      { source: '/acceptInvite',
        target: '/acceptInvite_post',
        type: 'resolved' },
      { source: '/', target: '/rejectInvite', type: 'licensing' },
      { source: '/rejectInvite',
        target: '/rejectInvite_delete',
        type: 'resolved' },
      { source: '/', target: '/getinvites', type: 'licensing' },
      { source: '/getinvites',
        target: '/getinvites_post',
        type: 'resolved' },
      { source: '/getinvites_post',
        target: 'jsonParser_/getinvites',
        type: 'licensing' },
      { source: 'jsonParser_/getinvites',
        target: 'corsMiddleware_/getinvites',
        type: 'licensing' },
      { source: 'corsMiddleware_/getinvites',
        target: 'profilerMiddleware_/getinvites',
        type: 'licensing' },
      { source: 'profilerMiddleware_/getinvites',
        target: 'expressInit_/getinvites',
        type: 'licensing' },
      { source: 'expressInit_/getinvites',
        target: 'query_/getinvites',
        type: 'licensing' },
      { source: 'query_/getinvites',
        target: 'getInvites_/getinvites',
        type: 'licensing' },
      { source: 'getInvites_/getinvites',
        target: 'serveStatic_/getinvites',
        type: 'licensing' },
      { source: 'serveStatic_/getinvites',
        target: 'cookieParser_/getinvites',
        type: 'licensing' },
      { source: 'cookieParser_/getinvites',
        target: 'urlencodedParser_/getinvites',
        type: 'licensing' },
      { source: '/', target: '/authuser', type: 'licensing' },
      { source: '/authuser',
        target: '/authuser_post',
        type: 'resolved' },
      { source: '/authuser_post',
        target: 'jsonParser_/authuser',
        type: 'licensing' },
      { source: 'jsonParser_/authuser',
        target: 'corsMiddleware_/authuser',
        type: 'licensing' },
      { source: 'corsMiddleware_/authuser',
        target: 'profilerMiddleware_/authuser',
        type: 'licensing' },
      { source: 'profilerMiddleware_/authuser',
        target: 'expressInit_/authuser',
        type: 'licensing' },
      { source: 'expressInit_/authuser',
        target: 'query_/authuser',
        type: 'licensing' },
      { source: 'query_/authuser',
        target: 'authenticateUser_/authuser',
        type: 'licensing' },
      { source: 'authenticateUser_/authuser',
        target: 'app.post_/authuser',
        type: 'licensing' },
      { source: 'app.post_/authuser',
        target: 'serveStatic_/authuser',
        type: 'licensing' },
      { source: 'serveStatic_/authuser',
        target: 'cookieParser_/authuser',
        type: 'licensing' },
      { source: 'cookieParser_/authuser',
        target: 'urlencodedParser_/authuser',
        type: 'licensing' },
      { source: '/', target: '/getusers', type: 'licensing' },
      { source: '/getusers',
        target: '/getusers_get',
        type: 'resolved' },
      { source: '/', target: '*', type: 'licensing' },
      { source: '*', target: '*_get', type: 'resolved' },
      { source: '/', target: '/bundle.js', type: 'licensing' },
      { source: '/bundle.js',
        target: '/bundle.js_get',
        type: 'resolved' },
      { source: '/', target: '/favicon.ico', type: 'licensing' },
      { source: '/favicon.ico',
        target: '/favicon.ico_get',
        type: 'resolved' },
      { source: '/favicon.ico_get',
        target: 'serveStatic_/favicon.ico',
        type: 'licensing' },
      { source: 'serveStatic_/favicon.ico',
        target: 'cookieParser_/favicon.ico',
        type: 'licensing' },
      { source: 'cookieParser_/favicon.ico',
        target: 'urlencodedParser_/favicon.ico',
        type: 'licensing' },
      { source: 'urlencodedParser_/favicon.ico',
        target: 'jsonParser_/favicon.ico',
        type: 'licensing' },
      { source: 'jsonParser_/favicon.ico',
        target: 'corsMiddleware_/favicon.ico',
        type: 'licensing' },
      { source: 'corsMiddleware_/favicon.ico',
        target: 'profilerMiddleware_/favicon.ico',
        type: 'licensing' },
      { source: 'profilerMiddleware_/favicon.ico',
        target: 'expressInit_/favicon.ico',
        type: 'licensing' },
      { source: 'expressInit_/favicon.ico',
        target: 'query_/favicon.ico',
        type: 'licensing' } ],
      formatAsPercentage: d3.format("%"),
      formatAsInteger: d3.format(",")
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({ selected: this.datasetBarChosen("/boardsid_post") });
  }
  onHover = d => {
    this.setState({ hover: d });
  };

  onClick = (d, i) => {
    this.setState({
      selected: this.datasetBarChosen(d.data.category),
      color: this.state.getColor(i)
    });
    console.log(d)
  };

  datasetBarChosen = group => {
    const ds = [];
    for (let x in this.state.barChartData) {
      if (this.state.barChartData[x].group == group) {
        ds.push(this.state.barChartData[x]);
      }
    }
    return ds;
  };
  angle = d => {
    let a = ((d.startAngle + d.endAngle) * 90) / Math.PI - 90;
    return a > 90 ? a - 180 : a;
  };

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
  // toggleGraph = () => {
  //   this.setState({ selectedGraph: !this.state.selectedGraph, graphName: this.selectedGraph ? 'Zoom Graph' : 'Force Route Graph'})
  //   //console.log(`selected graph: ${this.state.selectedGraph}`)

  // }
  selectCollapsible = () => {
    this.setState({ selectedGraph: "Collapsible" });
  };
  selectForce = () => {
    this.setState({ selectedGraph: "Force" });
  };
  selectZoom = () => {
    this.setState({ selectedGraph: "Zoom" });
  };

  componentDidMount() {
    //axios call to get data from database
  }

  render() {
    return (
      <div className="graphcontainer">
        <div className="dashboard">
          <PieChart
            onClick={this.onClick}
            getColor={this.state.getColor}
            data={this.state.pieChartData}
            formatAsPercentage={this.state.formatAsPercentage}
            angle={this.angle}
            barChartData={this.state.selected}
            formatAsInteger={this.state.formatAsInteger}
            color={this.state.color}
          />
          <BarChart
            data={this.state.selected}
            color={this.state.color}
            formatAsInteger={this.state.formatAsInteger}
          />
        </div>
        <div>
          <h2>Routes & Middleware Map</h2>
          <Button variant="outlined" color="primary" onClick={this.selectCollapsible}>
            Collapsible Graph
          </Button>
          <Button variant="outlined" color="primary" onClick={this.selectForce}>
            Force Graph
          </Button>
          <Button variant="outlined" color="primary" onClick={this.selectZoom}>
            Zoom Graph
          </Button>
          <div
            className="routemap"
            style={{
              display: this.state.selectedGraph === "Force" ? "flex" : "none",
              justifyContent: "center",
            }}
          >
            <RouteMap forceGraphData={this.state.forceGraphData} />
          </div>
          <div
            className="storyForceGraph"
            style={{
              display: this.state.selectedGraph === "Zoom" ? "flex" : "none",
              justifyContent: "center",
            }}
          >
            <StoryForceGraph />
          </div>
          <div
            className="collapsible"
            style={{
              display:
                this.state.selectedGraph === "Collapsible" ? "flex" : "none",
              justifyContent: "center",
            }}
          >
            <Collapsible />
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(GraphContainer);
