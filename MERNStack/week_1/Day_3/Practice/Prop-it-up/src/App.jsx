import React from 'react'
import './App.css'
import Details from './components/details';

function App() {
  const person1 = {
    first_name: "Anis",
    last_name: "Rouis",
    age: 28,
    hair: "Black"
  }
  const person2 = {
    first_name: "Med Souleim",
    last_name: "Ben Said",
    age: 26,
    hair: "Black"
  }
  const person3 = {
    first_name: "Med Alaa",
    last_name: "Fehri",
    age: 20,
    hair: "Brown"
  }
  const person4 = {
    first_name: "Jasser",
    last_name: "Boulila",
    age: 18,
    hair: "Dark Brown"
  }
  return (
    <>
      <div>
        <fieldset>
          <legend>First Person</legend>
          <Details person={person1} />
        </fieldset>
        <fieldset>
          <legend>Second Person</legend>
          <Details person={person2} />
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>Third Person</legend>
          <Details person={person3} />
        </fieldset>    <fieldset>
          <legend>Fourth Person</legend>
          <Details person={person4} />
        </fieldset>
      </div>
      
    </>
  )
}

export default App
