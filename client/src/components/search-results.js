import React from 'react'

const Results = ({personList}) => {

  let listItems = personList.map(person => {
    return (
      <li key={person.name}>{person.name}, favourite colour {person.favouriteColour}</li>
    )
  })

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default Results