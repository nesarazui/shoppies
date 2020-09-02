//ACTION TYPE
const NOMINATE_MOVIE = 'NOMINATE_MOVIE'
const REMOVE_MOVIE = 'REMOVE_MOVIE'


//ACTION CREATOR
export const nominateMovie = movie => {
  return {
    type: NOMINATE_MOVIE,
    movie
  }
}

export const removeMovie = movie => {
return {
  type: REMOVE_MOVIE,
  movie
}
}


//THUNK
// export const nominatingMovie = (movie) => {
//   return async dispatch => {
//     try {
//       console.log('here', movieTitle)
//       const {data} = await axios.get(`http://www.omdbapi.com/?s=${movieTitle}&apikey=6befe58e`)
//       console.log('got OMDB data!', data)
//       dispatch(nominateMovie(movie))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

//INITIAL STATE
const initialState = {movieNominations: []}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case NOMINATE_MOVIE:
        let clone = {...state};
        clone.movieNominations = [...clone.movieNominations,action.movie]
      return clone
    case REMOVE_MOVIE:
        let cloneToRemoveMovie = {...state}
        let updatedArr = cloneToRemoveMovie.movieNominations.filter((movie) => {
          if (action.movie === movie){
            return false
          } else {
            return true
          }
        })
        cloneToRemoveMovie.movieNominations = updatedArr
        return cloneToRemoveMovie
    default:
      return state
  }
}