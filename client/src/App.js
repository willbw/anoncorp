import React, { Component } from 'react'
import SearchBar from './components/search-bar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      results : []
    }
    this.customerSearch('Ge')
    console.log('yeah just sent it')
  }

  customerSearch(searchterm) {
    let data = {searchterm: searchterm}
    fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log ('Request succeeded with response', data)
    })
    .catch(error => {
      console.log('Request failed', error)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Customer Management</h1>
        <SearchBar customerSearch={this.customerSearch} />
      </div>
    );
  }
}

export default App;