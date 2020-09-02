import React from 'react'
import SingleMovieFromSearch from './SingleMovieFromSearch'
import {connect} from 'react-redux'

class DisplayResults extends React.Component {


    render(){
        const movieResults = this.props.movieData
        // const movieResults = 
        // [{Title: "Rambo: First Blood Part II", Year: "1985", imdbID: "tt0089880", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZWFkY2I1ZD…DA5ODg5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
        // {Title: "Rambo III", Year: "1988", imdbID: "tt0095956", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNGM5ZWZiOD…2EzNjU4XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"},
        // {Title: "Rambo: Last Blood", Year: "2019", imdbID: "tt1206885", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNTAxZWM2OT…WQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"},
        // {Title: "Rambo", Year: "1986", imdbID: "tt0222619", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BZDQ0M2M2Mj…GM3MzkxXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_SX300.jpg"},
        // {Title: "Rambo III", Year: "1989", imdbID: "tt0301766", Type: "game", Poster: "N/A"},
        // {Title: "Rambo: First Blood Part II", Year: "1986", imdbID: "tt0301768", Type: "game", Poster: "https://m.media-amazon.com/images/M/MV5BNzRmM2EwYz…GJhYWM4XkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_SX300.jpg"},
        // {Title: "Rambo", Year: "2012"}]
        console.log(movieResults, '???')
        return(
            <div className="custom-container-fluid">
                <h4 className="text-muted">Search Results</h4>
                {
                    movieResults.length > 0?
                    <ul className="list-group">
                    {
                        movieResults.map((movieObj, idx) => {
                        return (
                            <SingleMovieFromSearch title={movieObj.Title} year={movieObj.Year} key={idx}/>
                        )
                    })
                    }
                    </ul>
                      :
                    null
                }
            </div>
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