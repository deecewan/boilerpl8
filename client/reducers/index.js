import { combineReducers } from 'redux-immutable';

const reducers = {};

function requireAll(requireContext) {
  requireContext.keys().forEach(key => {
    const reducer = key.match(/\.\/(.*)\.js/)[1];
    if (reducer !== 'index') {
      reducers[reducer] = requireContext(key).default; // eslint-disable-line
    }
  });
}
// get all the reducers
requireAll(require.context('./', false, /.*\.js$/));

export default combineReducers(reducers);
