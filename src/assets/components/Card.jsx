import React, { useState } from 'react'
import "./Card.css"

const Card = ({name,desc,showCard,editButton,deleteButton,status}) => {
const [selectedOption, setSelectedOption] = useState(status);
const colorOptions = { 
  'Completed' : "lightgreen",
  'Not Completed' : "#FE8080"
};
const handleSelectChange = (event) => {
  setSelectedOption(event.target.value);
};
 
  return (
   <div>
     { showCard ? (
      <div className='card' >
      <div className="card-body">
      <b>Name:</b> {name}
      <br /> 
      <b>Description:</b> {desc}
      <br /> 
      <b> Status:</b>&nbsp;
       <span>
        <select value={selectedOption}
        onChange={handleSelectChange}
        style={{ backgroundColor: colorOptions[selectedOption] }}>
       <option value="Not Completed">Not Completed</option>
       <option value="Completed">Completed</option>
      </select> 
      </span>
      <br />
      <br />
      <button type="button" className="btn btn-success" onClick={()=>{editButton(name,desc)}}>Edit</button> &nbsp; &nbsp;
      <button type="button" className="btn btn-danger" onClick={deleteButton}>Delete</button>
      </div>
      </div>
     ) : <div></div> }
   </div>
  )
}

export default Card



