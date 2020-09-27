import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import phonebookApp from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  phonebook: phonebookApp,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware, thunk));

sagaMiddleware.run(rootSaga);

export default store;
