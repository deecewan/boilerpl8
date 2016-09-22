import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
