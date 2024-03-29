import React, { useState } from 'react'
import './App.css'
import Heading from './assets/components/Heading'
import Inputs from './assets/components/Inputs'
import Card from './assets/components/Card'
const App = () => {

const [name,setName] = useState("")
const [desc,setDesc] = useState("")
const [showCard,setShowCard] = useState(false)

const todoName = (e) => {
   setName(e.target.value)
}
const todoDesc = (e) => {
   setDesc(e.target.value)
}
const addTodoButton = () =>{
  setShowCard(true)
}
  return (
    <div>
       <Heading/>
       <Inputs name = {name}
       onNameChange={todoName}
       desc={desc}
       onDescChange={todoDesc}
       addTodoButton={addTodoButton}/>
       <Card
       name={name}
       desc={desc}
       showCard={showCard}/>
   </div>

 
  )
}

export default App
