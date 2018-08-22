import React, { Component } from 'react';

///need to talk to group about importing font awesome stuff

class Instructions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
        };
      }
      
    
    render() {
      const containerStyle = {
        height: '30%',
        width: "100%",
        marging: '10px 10px 10px 10px',
        padding: '10px 10px 10px 10px'
      }
      const imageStyle = {
        width: '50%',
        overflow: 'hidden'
      }
      const something = {
        width: '80%',
        height: '80%'
      }
        return (
  <div style = {containerStyle}>
      <h2>Middleman-NPM</h2>

Middleman is an intuitive Express Performance Monitor that will measure performant properties middleware of applications in development mode and provide users with debugging tools to help you compare all your middleware within your routes, allowing you to fully optimize your application for production mode. Middleman will help provide you with the all enhancement tools you need for your middleware. 
<br/>
<h3> Requirements </h3>
  <div>
    Middleman is currently only compatible with Node v8.5. 
  </div>
<br/>

<h3>Installation</h3> 
Install the module with npm install middleman-NPM:
<br/>
	npm install middleman-npm
	<br/>
<img src = 'https://i.imgur.com/2SD6CMb.png' style = {something}/>

<br/>

<h3>Usage</h3> 
To initialize Middleman, simply require the npm module and insert Middleman to configure all your routes:
  <br/>
 **Middleman must be destructured from the object in the required phase*
<br/>
<img src = 'https://i.imgur.com/fjYfyGz.png' style = {imageStyle} />
<br/>
To begin viewing performance data analysis of all your routes, hit  Ctrl>+C  to end server: 
<br/>

<img src = 'https://i.imgur.com/46zfcse.png' style = {imageStyle}/>
<br/>

Once finished, visit Middleman website with your custom hash instance key to view performance details:
<br/>

	<img src = 'https://i.imgur.com/XyZkj14.png' style = {imageStyle}/>


          </div> 
        );
    }
}

export default Instructions;