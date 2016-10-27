import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';

import app from './reducers';

const initialState = new Map();
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify here name, actionsBlacklist, actionsCreators and other options
    }) : compose;
/* eslint-enable */

export default createStore(app,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension() : f => f
  )
);
