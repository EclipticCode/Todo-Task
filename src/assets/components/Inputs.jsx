import React from 'react'
import "./Inputs.css"

const Inputs = () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-5 col-md-5">
                    <input type="text" className="form-control text-muted" placeholder="Todo Name" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div className="col-sm-5 col-md-5">
                    <input type="text" className="form-control text-muted" placeholder="Todo Description" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
                <div className="col-sm-2 col-md-2">
                    <button type="button" className="btn todoButton">Add Todo</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <b> My Todos</b>
                </div>
                <div className="col-sm-6">
                    <b>Status Filter:</b> &nbsp;
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        All
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Completed</a></li>
                        <li><a className="dropdown-item" href="#">Not Completed</a></li>

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Inputs