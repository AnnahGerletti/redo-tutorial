import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className = "searchBar">
        <div className="field">
          <label className="label">Search Bar</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
          <p className="help">Enter a search topic</p>
        </div>
      </div>
    )
  }
}
export default SearchBar
