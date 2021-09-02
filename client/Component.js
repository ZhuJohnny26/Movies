import React from 'react'
import {connect} from 'react-redux'
import {getMoviesThunk} from './store/movies'

class Component extends React.Component{
    constructor(){
        super()
        this.state = {
            input:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
        
    }
    async handleChange(event){
            await this.setState({[event.target.name] : event.target.value})
    }
    async search(){
        await this.props.getMovies(this.state.input)
    }
    componentDidMount(){
        let test = document.getElementById('search-bar')
        test.addEventListener('keydown', (e) => {
            if(e.code === 'Enter') {
                this.search()
            }
        })
    }
    render(){
        let movies = this.props.movies
        return (
            <div id='container'>
                <div id='search-bar'>
                <input name='input' className='interface' onChange={this.handleChange}></input>
                <button className='interface' onClick={this.search}>search</button>
                </div>
                {Array.isArray(movies) ? 
                    <div id='movies-container'>  
                       {movies.map((movie, index) => (
                           <div key={index} className='movie'>
                               <img src={movie.Poster}></img>
                               <p>{movie.Title}</p>
                            </div>
                            
                       ))}
                    </div>
                    : 
                    <p id='error-message'>
                    {movies}    
                    </p>    
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state
})
  
const mapDispatchToProps = dispatch => ({
    getMovies: (input) => dispatch(getMoviesThunk(input))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Component)