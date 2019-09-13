import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'


const counterReducer = (state=0, action) =>{
    switch(action.type){
        case 'add':
            return state +1;
        case 'minus':
            return state -1;
        default:
            return state; 
    }
}

export default createStore(counterReducer)