import React, { Component } from "react";
import RouteMap from "../components/RouteMap";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import StoryForceGraph from "../components/StoryForceGraph";
import Collapsible from "../components/Collapsible";
import * as d3 from "../d3/d3";

// button config
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
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
      color: "lightgrey",
      selectedGraph: "",
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
      forceGraphData: [
        { source: "/", target: "/tasksid", type: "licensing" },
        { source: "/tasksid", target: "/tasksid_post", type: "resolved" },
        { source: "/", target: "/tasks", type: "licensing" },
        { source: "/tasks", target: "/tasks_delete", type: "resolved" },
        { source: "/", target: "/updatetasks", type: "licensing" },
        {
          source: "/updatetasks",
          target: "/updatetasks_post",
          type: "resolved"
        },
        { source: "/", target: "/alltasks", type: "licensing" },
        {
          source: "/alltasks",
          target: "/alltasks_get",
          type: "resolved"
        },
        { source: "/", target: "/storiesid", type: "licensing" },
        {
          source: "/storiesid",
          target: "/storiesid_post",
          type: "resolved"
        },
        { source: "/", target: "/stories", type: "licensing" },
        {
          source: "/stories",
          target: "/stories_delete",
          type: "resolved"
        },
        { source: "/", target: "/updatestories", type: "licensing" },
        {
          source: "/updatestories",
          target: "/updatestories_post",
          type: "resolved"
        },
        { source: "/", target: "/allstories", type: "licensing" },
        {
          source: "/allstories",
          target: "/allstories_get",
          type: "resolved"
        },
        { source: "/", target: "/boardsid", type: "licensing" },
        {
          source: "/boardsid",
          target: "/boardsid_post",
          type: "resolved"
        },
        {
          source: "/boardsid_post",
          target: "post_jsonParser",
          type: "licensing"
        },
        {
          source: "/boardsid_post",
          target: "post_corsMiddleware",
          type: "licensing"
        },
        {
          source: "/boardsid_post",
          target: "post_profilerMiddleware",
          type: "licensing"
        },
        {
          source: "/boardsid_post",
          target: "post_expressInit",
          type: "licensing"
        },
        {
          source: "/boardsid_post",
          target: "post_query",
          type: "licensing"
        },
        {
          source: "/boardsid_post",
          target: "post_getBoards",
          type: "licensing"
        },
        {
          source: "/boardsid_post",
          target: "post_serveStatic",
          type: "licensing"
        },
        {
          source: "/boardsid_post",
          target: "post_cookieParser",
          type: "licensing"
        },
        {
          source: "/boardsid_post",
          target: "post_urlencodedParser",
          type: "licensing"
        },
        { source: "/", target: "/boards", type: "licensing" },
        { source: "/boards", target: "/boards_delete", type: "resolved" },
        {
          source: "/boards_delete",
          target: "delete_jsonParser",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_corsMiddleware",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_profilerMiddleware",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_expressInit",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_query",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_deleteBoard",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_serveStatic",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_cookieParser",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_urlencodedParser",
          type: "licensing"
        },
        { source: "/", target: "/boards", type: "licensing" },
        { source: "/boards", target: "/boards_post", type: "resolved" },
        {
          source: "/boards_delete",
          target: "delete_jsonParser",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_corsMiddleware",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_profilerMiddleware",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_expressInit",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_query",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_addBoard",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_serveStatic",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_cookieParser",
          type: "licensing"
        },
        {
          source: "/boards_delete",
          target: "delete_urlencodedParser",
          type: "licensing"
        },
        { source: "/", target: "/sendInvite", type: "licensing" },
        {
          source: "/sendInvite",
          target: "/sendInvite_post",
          type: "resolved"
        },
        { source: "/", target: "/acceptInvite", type: "licensing" },
        {
          source: "/acceptInvite",
          target: "/acceptInvite_post",
          type: "resolved"
        },
        { source: "/", target: "/rejectInvite", type: "licensing" },
        {
          source: "/rejectInvite",
          target: "/rejectInvite_delete",
          type: "resolved"
        },
        { source: "/", target: "/getinvites", type: "licensing" },
        {
          source: "/getinvites",
          target: "/getinvites_post",
          type: "resolved"
        },
        {
          source: "/getinvites_post",
          target: "post_jsonParser",
          type: "licensing"
        },
        {
          source: "/getinvites_post",
          target: "post_corsMiddleware",
          type: "licensing"
        },
        {
          source: "/getinvites_post",
          target: "post_profilerMiddleware",
          type: "licensing"
        },
        {
          source: "/getinvites_post",
          target: "post_expressInit",
          type: "licensing"
        },
        {
          source: "/getinvites_post",
          target: "post_query",
          type: "licensing"
        },
        {
          source: "/getinvites_post",
          target: "post_getInvites",
          type: "licensing"
        },
        {
          source: "/getinvites_post",
          target: "post_serveStatic",
          type: "licensing"
        },
        {
          source: "/getinvites_post",
          target: "post_cookieParser",
          type: "licensing"
        },
        {
          source: "/getinvites_post",
          target: "post_urlencodedParser",
          type: "licensing"
        },
        { source: "/", target: "/authuser", type: "licensing" },
        {
          source: "/authuser",
          target: "/authuser_post",
          type: "resolved"
        },
        {
          source: "/authuser_post",
          target: "post_jsonParser",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_corsMiddleware",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_profilerMiddleware",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_expressInit",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_query",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_authenticateUser",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_app.post",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_serveStatic",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_cookieParser",
          type: "licensing"
        },
        {
          source: "/authuser_post",
          target: "post_urlencodedParser",
          type: "licensing"
        },
        { source: "/", target: "/getusers", type: "licensing" },
        {
          source: "/getusers",
          target: "/getusers_get",
          type: "resolved"
        },
        { source: "/", target: "*", type: "licensing" },
        { source: "*", target: "*_get", type: "resolved" },
        { source: "/", target: "/bundle.js", type: "licensing" },
        {
          source: "/bundle.js",
          target: "/bundle.js_get",
          type: "resolved"
        },
        { source: "/", target: "/favicon.ico", type: "licensing" },
        {
          source: "/favicon.ico",
          target: "/favicon.ico_get",
          type: "resolved"
        },
        {
          source: "/favicon.ico_get",
          target: "get_serveStatic",
          type: "licensing"
        },
        {
          source: "/favicon.ico_get",
          target: "get_cookieParser",
          type: "licensing"
        },
        {
          source: "/favicon.ico_get",
          target: "get_urlencodedParser",
          type: "licensing"
        },
        {
          source: "/favicon.ico_get",
          target: "get_jsonParser",
          type: "licensing"
        },
        {
          source: "/favicon.ico_get",
          target: "get_corsMiddleware",
          type: "licensing"
        },
        {
          source: "/favicon.ico_get",
          target: "get_profilerMiddleware",
          type: "licensing"
        },
        {
          source: "/favicon.ico_get",
          target: "get_expressInit",
          type: "licensing"
        },
        {
          source: "/favicon.ico_get",
          target: "get_query",
          type: "licensing"
        }
      ],
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
        <div>
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
          <h2 style={{ fontWeight: "300" }}>Routes & Middleware Map</h2>
          <Button variant="outlined" onClick={this.selectCollapsible}>
            Collapsible Graph
          </Button>
          <Button variant="outlined" onClick={this.selectForce}>
            Force Graph
          </Button>
          <Button variant="outlined" onClick={this.selectZoom}>
            Zoom Graph
          </Button>
          <div
            className="routemap"
            style={{
              display: this.state.selectedGraph === "Force" ? "flex" : "none",
              justifyContent: "center"
            }}
          >
            <RouteMap forceGraphData={this.state.forceGraphData} />
          </div>
          <div
            className="storyForceGraph"
            style={{
              display: this.state.selectedGraph === "Zoom" ? "flex" : "none",
              justifyContent: "center"
            }}
          >
            <StoryForceGraph />
          </div>
          <div
            className="collapsible"
            style={{
              display:
                this.state.selectedGraph === "Collapsible" ? "flex" : "none",
              justifyContent: "center"
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
