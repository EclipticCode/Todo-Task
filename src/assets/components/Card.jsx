import React, { useState } from 'react'
import "./Card.css"

const Card = ({name,desc,showCard,editButton,deleteButton}) => {
const [selectedOption, setSelectedOption] = useState('');
const colorOptions = { 
  'Completed' : "green",
  'Not Completed' : "red"
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
      <b>Description:</b>{desc}
      <br /> 
      <b> Status:</b> 
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
     ) :
     <div></div>}
   </div>
  )
}

export default Card



