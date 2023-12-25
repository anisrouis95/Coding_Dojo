import { useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'
import './App.css'

function App() {
  const postsList = {title:Anis, body:aaaaa} 
  const [posts, setPost] = useState(postsList)
  const updatePost = () => {
    console.log("Updated!!!");
  }

  return (
    <>
    <fieldset>
      <legend>App.js</legend>
      <h1>Lifting State</h1>
      <Form />
      <Display />
    </fieldset>
    </>
  )
}

export default App
