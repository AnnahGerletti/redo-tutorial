import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {term:""}

    this.onInputChange= this.onInputChange.bind(this)

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

            <input
              value={this.state.term}
              className="input" type="text" placeholder="Text input" value={this.state.term} onChange={this.onInputChange}/>
          </div>
          <p className="help">Enter a search topic</p>
        </div>
      </div>
    )
  }
}
export default SearchBar



{/* <div class="control">
  <input class="input" type="text" placeholder="Text input">
</div> */}
