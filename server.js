const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

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

app.post('/api/search', (req, res) => {
  let searchterm = req.body.searchterm
  let matches = []
  for (let i = 0; i < customers.length; i++){
    if (customers[i].name.toLowerCase().includes(searchterm.toLowerCase())) {
      matches.push(customers[i])
    }
  }
  res.json(matches)
})

app.listen(port, () => console.log(`Server started on port ${port}`))