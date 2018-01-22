const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')
// Database connection object - clearly this is not connected
const connection = new Object 

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')));

// So our app functions, we will store the values for customers here
// In reality, they would be held in a database
let customers = [
  {name: 'Franklin D. Roosevelt', favouriteColour: 'Viridian'},
  {name: 'Harry S. Truman', favouriteColour: 'Prussian blue'},
  {name: 'Dwight D. Eisenhower', favouriteColour: 'Cerise'},
  {name: 'John F. Kennedy', favouriteColour: 'Taupe'},
  {name: 'Lyndon B. Johnson', favouriteColour: 'Gray'},
  {name: 'Richard M. Nixon', favouriteColour: 'Salmon'},
  {name: 'Gerald R. Ford', favouriteColour: 'Slate gray'},
  {name: 'Jimmy Carter', favouriteColour: 'Bronze'},
  {name: 'Ronald Reagan', favouriteColour: 'Cyan'},
  {name: 'George H. W. Bush', favouriteColour: 'Taupe'},
  {name: 'Bill Clinton', favouriteColour: 'Carmine'},
  {name: 'George W. Bush', favouriteColour: 'Erin'},
  {name: 'Barack Hussein Obama', favouriteColour: 'Coral'},
  {name: 'Donald J. Trump', favouriteColour: 'Amethyst'}
]

// Searches our list of customers for those whose name contains the search term
// Then returns the result as an array
app.post('/api/search', (req, res) => {
  let searchterm = req.body.searchterm
  let results = []
  for (let i = 0; i < customers.length; i++){
    if (customers[i].name.toLowerCase().includes(searchterm.toLowerCase())) {
      results.push(customers[i])
    }
  }
  res.json(results)
})

// In reality our data could be held in a SQL database 
app.post('/api/sql_search', (req, res) => {
  let searchterm = req.body.searchterm
  let results = connection.query('SELECT name, favourite_colour FROM CUSTOMERS WHERE CUSTOMERS.name = \'' + searchterm + '\'',
    (err, records) => {
      res.json(records)
    })
})

// Pushes new customer with their favourite colour onto our customers array
app.post('/api/addcustomer', (req, res) => {
  let newCustomer = req.body
  customers.push(newCustomer)
  res.sendStatus(200)
})

// Returns a string with all of the existing customers, to be shown as an alert
//  within the browser by React
app.get('/api/customerlist', (req, res) => {
  let customerList = customers.map(cust => {
    return `Name: ${cust.name}. Favourite Colour: ${cust.favouriteColour}.`
  })
  customerList = customerList.join('\n')
  res.send(customerList)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`))