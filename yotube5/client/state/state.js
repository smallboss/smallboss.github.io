import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import promisesMiddleware from '../middlewares/promises.js'
import * as reducers from '../reducers';
import Constants from '../constants/AppConstants.js'


const reducer = combineReducers(reducers);
const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    promisesMiddleware, logger
)(createStore);


const store = createStoreWithMiddleware(reducer, {
    items: [],
});

export default store;