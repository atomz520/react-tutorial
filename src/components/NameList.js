import React from 'react'
import Person from './Person'

function NameList() {
  const people = [
    {
      id: 1,
      name: 'Mimi',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Mumu',
      age: 20,
      skill: 'Vue'
    },
    {
      id: 3,
      name: 'Mama',
      age: 40,
      skill: 'Angular'
    }
  ]
  return (
    <div>
      { 
        people.map( person => <Person key={person.id} person={person}/>)
      }
    </div>
  )
}

export default NameList