import React from 'react'
import { connect } from 'react-redux'
import SingleMovieNomination from './SingleMovieNomination'
import {removeMovie} from '../store/movieNominations'

class NominationList extends React.Component {
    constructor(props){
        super(props)
        this.removeFromNomination = this.removeFromNomination.bind(this)
    }

    removeFromNomination(movieObj){
        this.props.removeMovie(movieObj)
    }

    render(){
        const nominationList = this.props.nominatedMovies
            return(
                <div className="custom-container-fluid container-size">
                    <h4 className="text-muted">Nominations</h4>
                    {
                        nominationList.length === 0? 
                        <ul className="list-group">
                            <li className="list-group-item"><small className="text-muted">No Movies Have Been Nominated</small></li>
                        </ul>
                        : 
                        <ul className="list-group">
                        {
                        nominationList.map((movieObj, idx) => {
                            return (
                                <SingleMovieNomination key={idx} movieObj={movieObj} removeFromNomination={this.removeFromNomination} />
                            )
                        })
                        }
                        </ul>
                    }                
                </div>
            )
    }
    
}


const mapState = (state) => {
    return {
        nominatedMovies: state.movieNominations.movieNominations
    }
}

const mapDispatch = (dispatch) => {
    return {
        removeMovie: (movieObj) => dispatch(removeMovie(movieObj))
    }
}
export default connect(mapState, mapDispatch)(NominationList)

