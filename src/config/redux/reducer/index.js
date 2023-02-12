import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './globalReducer';

const reducer = combineReducers({
  globalReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
