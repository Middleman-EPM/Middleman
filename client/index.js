import React from 'react';
import ReactDom from 'react-dom';
// import App from './components/App';
//import AboutUs from './components/AboutUs'
import HomeContainer from './containers/HomeContainer'
import { createBrowserHistory } from 'history';
import indexRoutes from './routes/index.jsx';
import './assets/scss/material-kit-react.css?v=1.2.0';
import { Router, Route, Switch } from 'react-router-dom';

const hist = createBrowserHistory();

ReactDom.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);
