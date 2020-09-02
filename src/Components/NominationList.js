import React from 'react'
import { connect } from 'react-redux'
import SingleMovieNomination from './SingleMovieNomination'
import {removeMovie} from '../store/movieNominations'

class NominationList extends React.Component {
    constructor(props){
        super(props)
        this.removeFromNomination = this.removeFromNomination.bind(this)
        this.nominationLimitAlert = this.nominationLimitAlert.bind(this)
    }

    removeFromNomination(movie){
        this.props.removeMovie(movie)
    }

    nominationLimitAlert (){

    }

    render(){
        const nominationList = this.props.nominatedMovies
            return(
                <div className="custom-container-fluid">
                    <h4 className="text-muted">Nominations</h4>
                    {
                        nominationList.length === 0? 
                        <ul className="list-group">
                            <li className="list-group-item"><small className="text-muted"><em>No Movies Have Been Nominated</em></small></li>
                        </ul>
                        : 
                        <ul className="list-group">
                        {
                        nominationList.map((movieName, idx) => {
                            return (
                                <SingleMovieNomination key={idx} movieName={movieName} removeFromNomination={this.removeFromNomination} />
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
        removeMovie: (movie) => dispatch(removeMovie(movie))
    }
}
export default connect(mapState, mapDispatch)(NominationList)

