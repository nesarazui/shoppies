import React from 'react'

export default function SingleMovieNomination (props) {
    const movieName = props.movieName
    return (
        <li className="list-group-item">
        <div className="row align-items-center">
            <div className="col-10">
            {movieName}
            </div>
           <div className="col-2">
           <button className="btn custom-button-color-remove btn-sm" onClick={() => props.removeFromNomination(movieName)}>Remove</button>           
           </div>
        </div>
        </li>
    )
}