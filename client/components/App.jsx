import React, { Component } from 'react';
import GraphContainer from '../containers/GraphContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="main">
        <div className="title">
          <h1>Welcome to Middleman!</h1>
          <div>
            <GraphContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
