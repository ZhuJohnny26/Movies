import React from 'react'
import {connect} from 'react-redux'
import {getMoviesThunk} from './store'
import axios from 'axios'
import Secret from '../secret'


class Component extends React.Component{
    constructor(){
        super()
        this.state = {
            input:'',
            movies:[],
            var: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.get = this.get.bind(this)
        this.search = this.search.bind(this)
    }
    async handleChange(event){
            await this.setState({[event.target.name] : event.target.value})
    }
    get() {
        console.log(this.state)
        console.log(Secret)
    }
    async search(){
        let result = await axios(`http://www.omdbapi.com/?apikey=${Secret}&s=` + this.state.input)
        await this.setState({movies: result.data.Search})
        
    }
    render(){
        let movies = this.state.movies
        return (
            <div>
                test
                <input name='input' onChange={this.handleChange}></input>
                <button onClick={this.search}>search</button>
                <button onClick={this.get} >test</button>
                {this.state.movies.length !== 0 && 
                    <div>  
                       test
                    </div>}
            </div>
        )
    }
}

export default Component