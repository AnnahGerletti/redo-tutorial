import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer'

class StartUp extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoPlayer />
      </div>
    );
  }
}

export default StartUp
