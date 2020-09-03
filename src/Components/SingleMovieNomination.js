import React from 'react'

export default function SingleMovieNomination (props) {
    const movieObj = props.movieObj
    return (
        <li className="list-group-item">
        <div className="row align-items-center">
            <div className="col-11">
            {movieObj.Title} ({movieObj.Year})
            </div>
           <div className="col-1">
           <button className="btn custom-button-color-remove btn-sm" onClick={() => props.removeFromNomination(movieObj)}><ion-icon name="remove-outline"></ion-icon></button>           
           </div>
        </div>
        </li>
    )
}