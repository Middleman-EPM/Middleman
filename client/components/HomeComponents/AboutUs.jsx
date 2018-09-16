import React, { Component } from 'react';

///need to talk to group about importing font awesome stuff
const mainLogo = require('../../assets/middleman.png')

class AboutUs extends Component {
    constructor(props) {
        super(props);
        console.log('I am this!!! ',this)
        this.state = { 
          image1: false,
          image2: false,
          image3: false,
          buttonHovered: false 
        };
        this.setButtonHovered = this.setButtonHovered.bind(this);
      }
      setButtonHovered = (bool) => {
        
        this.setState({buttonHovered: bool}) 
        
        console.log('I am state!', this.state.buttonHovered)
       
     }

    
    render() {     

      const containerStyle = {
        marginTop: '10%',
        display: 'flex',
        width: '100%'
      }
             
      const flexItem =  {
        flex: '30%',        
      }
      const imageStyle = {
        width: '100%',
        height: '100%',
        border: '5px blue solid',
        margin: '0 0 0 0',
        zIndex: '-1'
        }
      const overlay = {
          position: "absolute",
          zIndex: "1",
          backgroundColor: "#e6e6e6",
          margin: '15px 15px 15px 15px',
          opacity: '.8'
      }  
      


    
      return (
        <div style = {containerStyle}>


          <div 
            style  = {flexItem}
            onMouseEnter={() => this.setButtonHovered(true)}
            onMouseLeave={() => this.setButtonHovered(false)}
            >
            {this.state.buttonHovered &&  <div style = {overlay}>  
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-github"></i>

            Hovering right meow! 🐱</div> }
            

            <img src = {mainLogo}  style = {imageStyle} />
          </div>
          <div style = {flexItem}>
            <img src = {mainLogo} style = {imageStyle}/>
          </div>
          <div style = {flexItem}>
          <img src = {mainLogo} style = {imageStyle}/>
          </div>
        </div>
        );
    }
}

export default AboutUs;