import React from 'react'

function Person({person}) {
  return (
    <h2>{ 'Name: ' + person.name + 'Age: ' + person.age + 'Skill: ' + person.skill }</h2>
  )
}

export default Person