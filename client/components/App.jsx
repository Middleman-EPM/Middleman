import React from 'react';
import GraphContainer from '../containers/GraphContainer';

export const App = () => (
  <div id="main">
    <div className="title">
      <h1>
        Welcome to MiddleMan!
      </h1>
      <div className="graph-container">
        <GraphContainer />
      </div>
    </div>
  </div>
);

export default App;
