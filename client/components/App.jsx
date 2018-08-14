import React, { Component } from 'react';
import GraphContainer from '../containers/GraphContainer';
// mui theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme.js';

const App = () => (
  <MuiThemeProvider theme={theme}>
  <div id="main">
    <div className="title">
      <h2>
        MiddleMan
      </h2>
      <div className="graph-container">
        <GraphContainer />
      </div>
    </div>
  </div>
 </MuiThemeProvider>

);


export default App;
