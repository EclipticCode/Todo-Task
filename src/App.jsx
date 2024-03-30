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

const todoName = (e) => {
   setName(e.target.value)
   e.preventDefault()
}
const todoDesc = (e) => {
   setDesc(e.target.value)
}
const addTodoButton = () => {
  setShowCard(true)
  setBoxes([...boxes,{name,desc}])
  // console.log(boxes)
  setName("")
  setDesc("")
}
// console.log(boxes)

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
          showCard={showCard}
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
