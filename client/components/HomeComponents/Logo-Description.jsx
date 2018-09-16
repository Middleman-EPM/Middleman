import React, { Component } from 'react';
//import mainLogo from '../../assets/'
const mainLogo = require('../../assets/middleman.png')

///need to talk to group about importing font awesome stuff

class LogoAndDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
        };
      }

      
      render() {
        const containerStyle = {
          // width: '100%',
          // paddingRight: '15px',
          // paddingLeft: '15px',
          // marginRight: 'auto',
          // marginLeft: 'auto',
           marginTop: '10%',
          display: 'flex'
        }
               
        const flexItem =  {
          flex: '50%'
        }
        const imageStyle = {
          width: '80%',
          height: '80%',
          float: 'right',
          border: '5px blue solid',
          margin: '0 0 0 0'
        }

        return (
          <div style = {containerStyle}>
            <div style  = {flexItem}>
              Log and Description Components
            </div>
            <div style = {flexItem} >
              <img src = {mainLogo} style = {imageStyle}/>
            </div>
          </div>  
        );
    }
}

export default LogoAndDescription;