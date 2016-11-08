import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import reducers from './reducers';

function getMiddleware () {
  const middleware = [
    // Handle asynchronous actions
    thunk,
    routerMiddleware(browserHistory),
  ];

  return middleware;
}

export default (initialState = {}) => {
  let middleware = applyMiddleware(...getMiddleware());

  const store = createStore(reducers, initialState, middleware);

  return store;
};
