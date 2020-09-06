import axios from 'axios'

//ACTION TYPE
const GET_MOVIES = 'GET_MOVIES'

//ACTION CREATOR
const getMovies = movies => {
  return {
    type: GET_MOVIES,
    movies
  }
}

//THUNK
export const fetchingMovies = (movieTitle) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`https://www.omdbapi.com/?s=${movieTitle}&apikey=6befe58e`)
      if (data.Response === "True"){
        dispatch(getMovies(data))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

//INITIAL STATE
const initialState = {movieData: []}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      let clone = {...state}
      action.movies.Search.forEach((movieObj) => {
        movieObj.disabled = false
      })
      clone.movieData = action.movies.Search
      return clone
    default:
      return state
  }
}
