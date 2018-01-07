import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTsearch from 'youtube-api-search'

import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'

const API_key = "AIzaSyB3--fdiw09Mdkq5QMv23CpdTgP-gmPubY"

class StartUp extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoPlayer />
        <VideoList />
      </div>
    );
  }
}

export default StartUp
