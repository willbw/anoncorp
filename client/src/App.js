import React, { Component } from 'react'
import SearchBar from './components/search-bar'
import Results from './components/search-results'
import AddCustomer from './components/add-customer'
import CustomerList from './components/customer-list'

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

  customerSearch = searchterm => {
    if (searchterm.trim().length === 0) {
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
      this.setState({personList: data})
    })
    .catch(error => {
      console.log('Request failed', error)
    })
  }

  addCustomer = customer => {
    fetch('/api/addcustomer', {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
  }

  getCustomers = () => {
    // alert('hey, you tried to get customers')
    fetch('/api/customerlist', {
      method: 'GET',
    })
    .then(response => response.text())
    .then(data => {
      alert(data)
    })
    .catch(error => {
      console.log('Request failed', error)
    })
  }

  render() {
    return (
      <div className="container">
      <div className="p-3 mb-2 rounded bg-dark text-white"><h1>Anon Corp Customer Management</h1></div>
        <div className="row">
          <div className="col-sm">
            <SearchBar customerSearch={this.customerSearch} />
            <Results personList={this.state.personList} />
          </div>
          <div className="col-sm">
            <AddCustomer addCustomer={this.addCustomer}/>
            <CustomerList getCustomers={this.getCustomers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;