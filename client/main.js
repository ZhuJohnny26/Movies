import React, {useState} from 'react'
import ReactDOM from 'react-dom'


class Component extends React.Component{
    constructor(){
        super()
        this.state = {
            input:'',
            movies:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.get = this.get.bind(this)
    }
    async handleChange(event){
            await this.setState({[event.target.name] : event.target.value})
    }
    get() {
        console.log(this.state)
    }
    render(){
        return (
            <div>
                test
                <input name='input' onChange={this.handleChange}></input>
                <button onClick={this.get}>search</button>
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
