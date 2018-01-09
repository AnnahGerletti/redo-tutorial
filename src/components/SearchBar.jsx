import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {term:""}
  }

  onInputChange(event) {
    this.setState({term:event.target.value});
  }

  render(){
    return(
      <div className = "searchBar">
        <div className="field">
          <label className="label">Search Bar</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" onChange={this.onInputChange.bind(this)}/>
          </div>
          <p className="help">Enter a search topic</p>
        </div>
      </div>
    )
  }
}
export default SearchBar
