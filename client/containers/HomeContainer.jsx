import React, { Component } from "react";


import Header from "../components/HomeComponents/Header";
import Main from "../components/HomeComponents/Main"


class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  

  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}
export default HomeContainer;
