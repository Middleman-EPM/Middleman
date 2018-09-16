import React, { Component } from 'react';
import AboutUs from './AboutUs';
import LogoAndDescription from './Logo-Description';
import Instructions from './Instructions';

///need to talk to group about importing font awesome stuff

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
        };
      }

    
    render() {
        return (
          <div>
           <LogoAndDescription/>
           <Instructions/>
           <AboutUs/> 
          </div>
        );
    }
}

export default Main;