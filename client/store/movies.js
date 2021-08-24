import axios from 'axios'
import Secret from '../../secret'
//Action Types
const GET_MOVIES = 'GET_MOVIES'

const getMovies = movies => ({
    type: GET_MOVIES,
    movies
})

export const getMoviesThunk = (input) => async dispatch => {
    try {
        const result = await axios(`http://www.omdbapi.com/?apikey=${Secret}&s=` + input)
        dispatch(getMovies(result.data.Search))
    } catch (err) {
        console.log('Error in get movies thunk')
    }
}

export default function moviesReducer(state = [], action){
    switch (action.type) {
        case GET_MOVIES:
          return action.movies
        default:
          return state
      }
}