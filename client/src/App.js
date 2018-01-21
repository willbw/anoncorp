import React, { Component } from 'react'
import SearchBar from './components/search-bar'
import Results from './components/search-results'
import AddCustomer from './components/add-customer'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      personList : []
    }
  }

  componentDidMount(){
    // console.log('state after mount:', this.state)
  }

  customerSearch = (searchterm) => {
    if (searchterm.length === 0) {
      this.setState({personList: []})
      return
    }
    let data = {searchterm: searchterm}
    fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log ('Request succeeded with response', data)
      this.setState({personList: data})
    })
    .catch(error => {
      console.log('Request failed', error)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Customer Management</h1>
        <div className="row">
          <div className="col-sm">
            <SearchBar customerSearch={this.customerSearch} />
            <Results personList={this.state.personList} />
          </div>
          <div className="col-sm">
            <AddCustomer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;