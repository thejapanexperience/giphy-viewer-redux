import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers/index';
import { saveState, loadState } from './localStorage';

// some middlewares need to be invoked and some don't. Check the docs
const middlewares = [
  logger(),
  thunk,
  // promise,
  promiseMiddleware(),
];

const store = createStore(rootReducer, loadState(), composeWithDevTools(applyMiddleware(...middlewares)));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
