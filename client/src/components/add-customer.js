import React, { Component } from 'react'

class AddCustomer extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      favouriteColour: ''
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onColourChange(event) {
    this.setState({favouriteColour: event.target.value})
  }

  add(event) {
    event.preventDefault()
    this.props.addCustomer(this.state)
    document.querySelector("#add-customer").reset()
    document.querySelector("#result").textContent = 'Customer successfully added.'
  }

  render() {
    return(
      <div>
        <div className="p-3 mb-2 h3 border rounded border-primary bg-light">
        Add New Customer</div>
        <form id="add-customer" onSubmit={(event) => {this.add(event)}}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control"
            onChange={event => {this.onNameChange(event)}} required />
          </div>
          <div className="form-group">
            <label>Favourite Colour</label>
            <input className="form-control"
            onChange={event => {this.onColourChange(event)}} required />
          </div>
          <button
          type="submit" 
          className="btn btn-primary">
            Submit
          </button>
          <div id="result"></div>
        </form>
      </div>
    )
  }
}

export default AddCustomer