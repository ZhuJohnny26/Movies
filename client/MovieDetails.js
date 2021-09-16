import React, {useEffect} from 'react'
import { getMovieDetails } from './store/movies'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class MovieDetails extends React.Component {
    constructor(){
        super()
        this.state = {
            movie:{}
        }
    }
    async componentDidMount(){
        let index = window.location.href.slice(-1)
        let result = await this.props.getMovie(index)
        this.setState({movie: result}) 
    }
    render(){ 
        
        let movie = this.state.movie
        return (
        <div id='detailed-container'>
            <Link id='back-arrow' to={'/'}>⤶</Link>  
            <div id='detailed-movie' >
                <img id='poster'src={movie.Poster} />
                <div id='details'>
                    <div id='header'>
                        <p>{movie.Title}</p>
                        <p>{movie.imdbRating}⭐</p>
                    </div>
                    <p>{movie.Plot}</p>
                    <p>Genre: {movie.Genre} </p>
                    <p>Language: {movie.Language}</p>
                    <p>Runtime: {movie.Runtime}</p>
                    <p>Released: {movie.Released}</p>
                    <p>Country: {movie.Country}</p>
                    
                </div>
            </div>
            
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getMovie: (input) => dispatch(getMovieDetails(input))
  })

export default connect(null, mapDispatchToProps)(MovieDetails)