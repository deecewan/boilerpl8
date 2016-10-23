import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import store from './store';

render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default; // eslint-disable-line

    render(
      <Provider store={store}>
        <AppContainer>
          <App />
        </AppContainer>
      </Provider>,
      document.getElementById('app')
    );
  });
}
