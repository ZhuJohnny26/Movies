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
    let test = await this.props.getMovie(index)
    console.log('i', test)
    await this.setState(test)
    
    }
    render(){ 
        console.log('huh', this.state)
        return (
        <div>
            <Link to={'/'}>back</Link>
            <div>{this.state.Title}</div>
            {this.state.Plot}
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getMovie: (input) => dispatch(getMovieDetails(input))
  })

export default connect(null, mapDispatchToProps)(MovieDetails)