import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import phonebookApp from './reducers';
import App from './App';
import { loadContactList } from './actions';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { BrowserRouter as Router } from 'react-router-dom';
import SubmitValidationForm from './components/Form/AddContactForm';
import store from './store';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(phonebookApp, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

store.dispatch(loadContactList());

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
