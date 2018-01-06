import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar';

class StartUp extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default StartUp
