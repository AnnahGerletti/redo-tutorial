import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className = "searchBar">
        <form>
          <input placeholder= 'what are you looking for?' />
        </form>
      </div>
    )
  }
}
export default SearchBar