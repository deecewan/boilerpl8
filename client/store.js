import { createStore } from 'redux';
import app from './reducer';

const store = createStore(app, window.devToolsExtension && window.devToolsExtension());

export default store;
