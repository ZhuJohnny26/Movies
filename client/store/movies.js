import axios from 'axios'
import Secret from '../../secret'
//Action Types
const GET_MOVIES = 'GET_MOVIES'
const ERROR = 'ERROR'

const getMovies = movies => ({
    type: GET_MOVIES,
    movies
})

const error = message => ({
    type: ERROR,
    message
})

export const getMoviesThunk = (input) => async dispatch => {
    try {
        const result = await axios(`http://www.omdbapi.com/?apikey=${Secret}&s=` + input)
        console.log('a', result)
        result.data.Search ? dispatch(getMovies(result.data.Search)) : dispatch(error(result.data.Error))
    } catch (err) {
        console.log('Error in get movies thunk', err)
        
    }
}

export default function moviesReducer(state = [], action){
    switch (action.type) {
        case GET_MOVIES:
          return action.movies
        case ERROR:
          return action.message
        default:
          return state
      }
}