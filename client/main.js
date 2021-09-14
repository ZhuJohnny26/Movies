import React from 'react'
import ReactDOM from 'react-dom'
import Component from './Component'
import store from './store'
import {Provider} from 'react-redux'
import MovieDetails from './MovieDetails'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const App = () => (
    <Provider store={store}>
        <Router>
            
            <Route exact path='/movies/:id'>
                <MovieDetails/>
            </Route>
            <Route exact path='/'>
                <Component/>
            </Route>
        </Router> 
    </Provider>
)


ReactDOM.render(<App />, document.getElementById('app'))
