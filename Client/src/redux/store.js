import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer/reducer';
import { thunk } from 'redux-thunk';


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extensnion del navegador => REDUX D

export const store = createStore(
    reducer, 
    composeEnhacer(applyMiddleware(thunk))); // Esta linea nos permite hacer peticiones a un servidor

export default store 



