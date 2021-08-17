import React from 'react'
import ReactDOM from 'react-dom'
import Secret from '../secret'
import axios from 'axios'

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
        return (
            <div>
                test
                <input name='input' onChange={this.handleChange}></input>
                <button onClick={this.search}>search</button>
                <button onClick={this.get} >test</button>
                {this.state.movies.length !== 0 && 
                    <div> wow 
                    
                    </div>}
            </div>
        )
    }
}
const App = () => (
    <div>
        test
    <Component/>
    </div>
)


ReactDOM.render(<App />, document.getElementById('app'))
