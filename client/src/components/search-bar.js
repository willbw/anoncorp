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
      <div className="p-3 mb-2 h3 border rounded border-primary">Customer Search</div>
      <div className="alert alert-info">Hint: all of the customers are US presidents inaugurated on or after 1933.
      Favourite colours have not been verified for their authenticity.</div>
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