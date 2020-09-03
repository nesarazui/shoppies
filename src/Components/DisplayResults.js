import React from 'react'
import SingleMovieFromSearch from './SingleMovieFromSearch'
import {connect} from 'react-redux'

class DisplayResults extends React.Component {


    render(){
        const movieResults = this.props.movieData
        const updateDisplayAlert = this.props.updateDisplayAlert
        return(
            <>
                {
                    movieResults.length > 0?
                    <ul className="list-group">
                    {
                        movieResults.map((movieObj) => {
                        return (
                            <SingleMovieFromSearch key={movieObj.imdbID} movieObj={movieObj} title={movieObj.Title} year={movieObj.Year} updateDisplayAlert={updateDisplayAlert}/>
                        )
                    })
                    }
                    </ul>
                      :
                    null
                }

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieData: state.movieData.movieData 
    }
}   


const ConnectedToDisplayResults = connect(mapStateToProps)(DisplayResults)
export default ConnectedToDisplayResults