import React, { useEffect, useState } from 'react'
import './App.css'
import Heading from './assets/components/Heading'
import Inputs from './assets/components/Inputs'
import Card from './assets/components/Card'

const App = () => {

const [name,setName] = useState("")
const [desc,setDesc] = useState("")
const [showCard,setShowCard] = useState(false)
const [boxes,setBoxes] = useState([])
const [filter,setFilter] = useState('all')

const todoName = (e) => {
   setName(e.target.value)
   e.preventDefault()
}
const todoDesc = (e) => {
   setDesc(e.target.value)
}
const addTodoButton = () => {
  setShowCard(true)
  setBoxes([...boxes,{name,desc,status:"Completed"}])
  setName("")
  setDesc("")
  console.log(boxes)
}
const handleDelete = (index) => {
  const updatedBoxes = [...boxes]
  updatedBoxes.splice(index,1)
  setBoxes(updatedBoxes)
  console.log(updatedBoxes)
}

const editButton = (name,desc) => {
  setName(name)
  setDesc(desc)
}

  return (
    <div>
       <Heading/>
       <Inputs name = {name}
       onNameChange={todoName}
       desc={desc}
       onDescChange={todoDesc}
       addTodoButton={addTodoButton}/>
       <div className="container">
       <div className='row'>
       { boxes.map((box,index)=>(
        <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
          <Card
          name={box.name}
          desc={box.desc}
          status={box.status}
          showCard={showCard}
          editButton={editButton}
          deleteButton={()=>handleDelete(index)}
          />
        </div>
        ))
       }
        

        
       </div>
       </div>
   </div>

 
  )
}

export default App
