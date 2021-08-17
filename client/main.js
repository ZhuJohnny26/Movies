import React, {useState} from 'react'
import ReactDOM from 'react-dom'
let updating = false
function secondFunction(){
    console.log('Second function called');
  }
function firstFunction(test){
    // Simulate a code delay
    setTimeout( function(){
      console.log('First function called');
      test();
    }, 1000 );
  }
  
  firstFunction(secondFunction);
  
  

const Component = (props) => {
    if(!props.input){
        let date = new Date()
        console.log('test')
        const [state, updateState] = useState({date: date.toDateString(), time: date.toLocaleTimeString()})
        if(!updating){
            updating = true
            setInterval(function(){
                let nextDate = new Date()
                updateState({date: nextDate.toDateString(), time: nextDate.toLocaleTimeString()})
            }, 1000)
        }
        
        return (
            <div>
                <p>{state.time}</p>
                <p>{state.date}</p>  
            </div>
        )
    }
    else if(Array.isArray(props.input)){
        return (
            <div>
                <ul>
                    {props.input.map((element, index) => (
                        <div key={index}>{element}</div>
                    ))}
                </ul>
            </div>
        )
    }
    else {
        return (
            <div>
                {props.input}
            </div>
        )
    }
    
} 

const App = () => (
    <div>
    <Component input={''}/>
    <Component input={['Componentlex', 'orange', 'grape', 'watermelon']}/>
    <Component input={14}/>
    </div>
)


ReactDOM.render(<App />, document.getElementById('app'))
