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
      <p>Hint: all of the customers are US presidents inaugurated on or after 1933.</p>
        <input
          placeholder="Enter a customer name"
          value={this.state.searchterm}
          onChange={e => {
            this.setState({searchterm: e.target.value})
            this.props.customerSearch(e.target.value)
          }}
          className="form-control"
        />
      </div>
    )
  }
}

export default SearchBar