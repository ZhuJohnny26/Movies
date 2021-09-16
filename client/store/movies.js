import axios from 'axios'
import Secret from '../../secret'
//Action Types
const GET_MOVIES = 'GET_MOVIES'
const ERROR = 'ERROR'
const TEST = 'test'
const getMovies = movies => ({
    type: GET_MOVIES,
    movies
})

const error = message => ({
    type: ERROR,
    message
})

export const getMoviesThunk = (input) => async (dispatch, getState) => {
    try {
        const result = await axios(`http://www.omdbapi.com/?apikey=${Secret}&s=` + input)
        
        result.data.Search ? dispatch(getMovies(result.data.Search)) : dispatch(error(result.data.Error))
 
    } catch (err) {
        console.log('Error in get movies thunk', err)
        
    }
}

export const getMovieDetails = (index) => async (dispatch, getState) => {
    try {
        let state = getState()
        let movie = await axios(`http://www.omdbapi.com/?apikey=${Secret}&i=` + state[index].imdbID + `&plot=full`)
        return movie.data
    } catch(err) {
        console.log('Error in get movie details thunk', err)
    }

}

export default function moviesReducer(state = [], action){
    switch (action.type) {
        case GET_MOVIES:
          return action.movies
        case ERROR:
          return action.message
        case TEST:
          console.log('elp', state)
        default:
          return state
      }
}