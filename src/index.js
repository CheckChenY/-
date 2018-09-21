import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './components/reducer'
import logger from 'redux-logger';

// "target": "http://192.168.1.128:8080",
// "target": "http://10.204.24.129:8080",
// import createHistory from 'history/createBrowserHistory'
// import { ConnectedRouter } from 'connected-react-router'


// import App from './App';
// import Login from './components/login'
import registerServiceWorker from './registerServiceWorker';

import App from './App'

let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger]
}

// const store = createStore(reducer, applyMiddleware(...middleware))
const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  )
registerServiceWorker();
