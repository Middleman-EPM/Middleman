import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
//import AboutUs from './components/AboutUs'
import HomeContainer from './containers/HomeContainer'
// import Test from '../client/components/Test'    <Route path='/About_us' component={ AboutUs } />
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

ReactDom.render((
  <BrowserRouter>
    <Switch>
      <div>
        <Route path='/view_data:id' component={ App } />
        <Route exact path='/' component={ HomeContainer } />
        <Redirect from='*' to='/' />
      </div>  
    </Switch>
  </BrowserRouter>
    ), document.getElementById('root'));
