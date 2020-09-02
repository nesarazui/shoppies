import {createStore, combineReducers, applyMiddleware} from 'redux'
// import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import movieData from './movieData'
import movieNominations from './movieNominations'

const reducer = combineReducers({movieData, movieNominations})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)
const store = createStore(reducer, middleware)

export default store
 export * from './movieData'
 export * from './movieNominations'