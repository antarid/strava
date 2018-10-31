import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import run from './reducers/run';

const rootReducer = combineReducers({
  run
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
