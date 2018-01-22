import React, { Component } from 'react'

class CustomerList extends Component {
  render() {
    return (
      <div className="mt-2">
        <div className="p-3 mb-2 h3 border rounded border-primary bg-light">
        Customer List</div>
        <button
        onClick={() => {this.props.getCustomers()}}
        className="btn btn-primary">
          Get customer list
        </button>
      </div>
    )
  }
}

export default CustomerList