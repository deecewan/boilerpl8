import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';

import app from './reducers';

const initialState = new Map();

export default createStore(app,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
