import React from 'react'
import './App.css'
const App = () => {
  return (
    <div>
      <h2 className='heading'>My Todo</h2>
       <div className="row">
         <div className="col-sm-5 col-md-5">
           <input type="text" className="form-control text-muted" placeholder="Todo Name" aria-label="Username" aria-describedby="addon-wrapping" />
         </div>
         <div className="col-sm-5 col-md-5">
           <input type="text" className="form-control text-muted" placeholder="Todo Description" aria-label="Username" aria-describedby="addon-wrapping"/>
         </div>
         <div className="col-sm-2 col-md-2">
           <button type="button" className="btn">Add Todo</button>
         </div>
       </div>
   </div>

 
  )
}

export default App
