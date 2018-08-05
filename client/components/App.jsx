import React from 'react';
import GraphContainer from '../containers/GraphContainer';

const App = () => (
  <div id="main">
    <div className="title">
      <h1>
        MiddleMan
      </h1>
      <div className="graph-container">
        <GraphContainer />
      </div>
    </div>
  </div>
);

export default App;
