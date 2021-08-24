import { createStore, applyMiddleware} from "redux";
import moviesReducer from "./movies";
import thunkMiddleware from 'redux-thunk'
const store = createStore(moviesReducer, applyMiddleware(thunkMiddleware))

export default store