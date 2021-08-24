import React from 'react'
import ReactDOM from 'react-dom'
import Component from './Component'
import store from './store'
import {Provider} from 'react-redux'
const App = () => (
    <Provider store={store}>
        test
        <Component/>
    </Provider>
)


ReactDOM.render(<App />, document.getElementById('app'))
