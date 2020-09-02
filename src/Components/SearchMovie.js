import React from 'react'
import DisplayResults from './DisplayResults'
// import axios from 'axios'
import { connect } from 'react-redux'
import {fetchingMovies} from '../store/movieData'

class SearchMovie extends React.Component {
    constructor(props){
        super(props)
        this.state={value: '', data: []}
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleChange (e) {
        let val = e.target.value
        this.setState((state) => ({value: val}))
        e.preventDefault()
        await this.props.fetchingMovies(this.state.value)
        await this.updateWithMovieData()
    }

    // async handleSubmit (event) {
    //     console.log('clicked submit')
    //     event.preventDefault()
    //     await this.props.fetchingMovies(this.state.value)
    //      await this.updateWithMovieData()
    //     //await setTimeout(() => this.updateWithMovieData, 5000)
        
    // }

    updateWithMovieData () {
     this.setState((state, props) => ({data: [...state.data, this.props.movieData]}))
     //this.setState((state, props) => ({data: [this.props.movieData]}), console.log('do we have the movie data in react: ', this.state.data))
    }

    render(){
        return(
            <div>
            <div className="custom-container-fluid">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} placeholder="Search For A Movie" onChange={this.handleChange} />
                    {/* <input className="btn custom-button-color-search btn-sm custom-button" type="submit" value="Go!"/> */}
                </form>
            </div> 
            {this.state.data.length > 0?
                <DisplayResults /> :
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

const mapDispatch = (dispatch) => {
    return {
        fetchingMovies: (movieTitle) => {
            dispatch(fetchingMovies(movieTitle))
        }
    }
}

const ConnectedToSearchMovies = connect(mapStateToProps, mapDispatch)(SearchMovie)
export default ConnectedToSearchMovies

// data: [{Title: 'Rambo', Year: 2008}, {Title: 'Little Mermaid', Year: 1988}, {Title: 'The Jungle Book', Year: 1987}, {Title: 'The Birds', Year: 1960}]}



        //     <Container fluid>
        //     <Row>
        //         <Col>
        //             Search OMDB Here.
        //             <form onSubmit={this.handleSubmit}>
        //             <input type="text" value={this.state.value} onChange={this.handleChange} />
        //             <input type="submit" value="Submit"/>
        //             </form>
        //             <DisplayResults />
        //         </Col>
        //     </Row>
        // </Container>