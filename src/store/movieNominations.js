//ACTION TYPE
const NOMINATE_MOVIE = 'NOMINATE_MOVIE'
const REMOVE_MOVIE = 'REMOVE_MOVIE'


//ACTION CREATOR
export const nominateMovie = movieObj => {
  return {
    type: NOMINATE_MOVIE,
    movieObj
  }
}

export const removeMovie = movieObj => {
return {
  type: REMOVE_MOVIE,
  movieObj
}
}

//INITIAL STATE
const initialState = {movieNominations: []}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case NOMINATE_MOVIE:
        let clone = {...state};
        action.movieObj.disabled = true
        clone.movieNominations = [...clone.movieNominations, action.movieObj]
      return clone
    case REMOVE_MOVIE:
        let cloneToRemoveMovie = {...state}
        action.movieObj.disabled = false
        let updatedArr = cloneToRemoveMovie.movieNominations.filter((movieObj) => {
          if (action.movieObj.Title === movieObj.Title){
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