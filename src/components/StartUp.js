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
    this.state = {videos:[]}

    YTsearch({key:API_key, term:"snow"},(YTvideos) =>{
      this.setState({videos:YTvideos})
      console.log("here", YTvideos)
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoPlayer />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default StartUp
