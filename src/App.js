import React, { Component } from 'react';
import Buttons from './components/Buttons';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: "add",
      items: []
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(str) {
    

  }





  render() {
    return (
      <div className="d-flex m-5">
        <Buttons text="Add" handleClick={this.handleButtonClick} />
        <Buttons text="List" handleClick={this.handleButtonClick} />
        <Buttons text="Pay" handleClick={this.handleButtonClick} />

      </div>
    );
  }
}

export default App;