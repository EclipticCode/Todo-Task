import React from 'react'
import "./Inputs.css"

const Inputs = ({name , onNameChange , desc , onDescChange , addTodoButton, filter, onFilterChange}) => {

    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-5">
                    <input type="text" className="form-control text-muted" placeholder="Todo Name" aria-label="Username" aria-describedby="addon-wrapping"
                    value={name}
                    onChange={onNameChange} />
                </div>
                <div className="col-sm-5">
                    <input type="text" className="form-control text-muted" placeholder="Todo Description" aria-label="Username" aria-describedby="addon-wrapping"
                    value={desc}
                    onChange={onDescChange}/>
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn todoButton" onClick={addTodoButton}>Add Todo</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <b> My Todos</b>
                </div>
                <div className="col-sm-6">
                    <b>Status Filter:</b> &nbsp;
                    <select value={filter} onChange={onFilterChange}>
                       <option value="All">All</option>
                         <option value="Completed">Completed</option>
                         <option value="Not Completed">Not Completed</option>
                   </select>
                </div>
            </div>
        </div>
    )
}

export default Inputs