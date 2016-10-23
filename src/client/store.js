import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';

import app from './reducers';

const initialState = new Map();

export default createStore(app,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension() : f => f
  )
);
