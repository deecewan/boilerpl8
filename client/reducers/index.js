import { combineReducers } from 'redux-immutable';

const reducers = {};

const context = require.context('./', false, /.*\.js$/);
context.keys().forEach(key => {
  const reducer = key.match(/\.\/(.*)\.js/)[1];
  if (reducer !== 'index') {
    reducers[reducer] = require(key).default; // eslint-disable-line
  }
});

export default combineReducers(reducers);
