import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchterm: ''
    }
  }

  render(){
    return(
      <div>
      <h3>Customer Search</h3>
        <input
          placeholder="Enter a customer name"
          value={this.state.searchterm}
          onChange={e => {
            this.setState({searchterm: e.target.value})
            this.props.customerSearch(e.target.value)
          }}
        />
        <button>Search</button>
      </div>
    )
  }
}

export default SearchBar