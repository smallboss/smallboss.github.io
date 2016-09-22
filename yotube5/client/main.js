import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App.jsx';
import store from './state/state'
import Constants from './constants/AppConstants.js'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount-point'));

store.subscribe(() => console.log('New state', store.getState()));
