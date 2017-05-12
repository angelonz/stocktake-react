import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './App';
import reducers from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware, middleware)
    // other store enhancers if any
  )
);

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
