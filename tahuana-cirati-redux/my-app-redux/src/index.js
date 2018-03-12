import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers, { INITIAL_STATE } from './reducers'

const store = createStore(allReducers, INITIAL_STATE, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
