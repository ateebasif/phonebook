import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { loadContactList } from './actions';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

store.dispatch(loadContactList());

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
