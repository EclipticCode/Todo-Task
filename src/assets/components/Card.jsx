import React from 'react'
import "./Card.css"

const Card = ({name,desc,showCard}) => {

  return (
   <div>
     { showCard ? (
      <div className='card'>
      <div className="card-body">
      <b>Name:</b> {name}
      <br /> 
      <b>Description:</b>{desc}
      <br /> 
      <b> Status:</b> 
      <span>
      <select name="" id="" className='select'>
      <option value="Not Completed">Not Completed</option>
      <option value="Completed">Completed</option>
      </select>
      </span>
      <br />
      <br />
      <button type="button" className="btn btn-success">Edit</button> &nbsp; &nbsp;
      <button type="button" className="btn btn-danger">Delete</button>
      </div>
      </div>
     ) :
     <div></div>}
   </div>
  )
}

export default Card



