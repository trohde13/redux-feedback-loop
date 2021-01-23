import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux plus logger
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducers
const feedbackReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}; // end feedbackReducer



// store
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
