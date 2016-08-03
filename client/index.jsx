import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import store from './store';
/**
 * the react application mount point
 */
const mountNode = document.getElementById('app');

/*
 * mounts react to DOM
 */
ReactDOM.render(
  <Root />,
  mountNode
);
