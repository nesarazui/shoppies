import React from 'react'
import { connect } from 'react-redux'
import { nominateMovie } from '../store/movieNominations'

class SingleMovieFromSearch extends React.Component{
    constructor(props){
        super(props)
        this.nominatingMovie = this.nominatingMovie.bind(this)
    }

    nominatingMovie (movie) {
        if (this.props.nominatedMovies.length === 5) {
            alert('Can Not Nominated Any More Movies')
        }
        else {
            this.props.nominateMovie(movie)
            // this.setState((state) => ({display: !state.display}))
        }
    }


    render(){
        const title = this.props.title
        const year = this.props.year
        return(
            <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-12 col-md-8">
                    <div className="align-right">{title} ({year})</div>
                </div>
                <div className="col-6 col-md-4">
                    <button className="btn custom-button-color-nominate btn-sm"  disabled={this.props.nominatedMovies.includes(title)} onClick={() => this.nominatingMovie(title)}>Nominate</button> 
                </div>
            </div>
            </li>
        )
    }

}

const mapDispatch = (dispatch) => {
    return {
        nominateMovie: (movie) => dispatch(nominateMovie(movie))
    }
}

const mapState = (state) => {
    return {
        nominatedMovies: state.movieNominations.movieNominations
    }
}
export default connect(mapState, mapDispatch)(SingleMovieFromSearch)

