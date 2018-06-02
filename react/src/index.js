import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import './index.css';
import App from './App';
import itemsReducer from './reducers/itemsReducer';
import singleItem from './reducers/singleItemReducer';

const rootReducer = combineReducers({
    items: itemsReducer,
    item: singleItem,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

