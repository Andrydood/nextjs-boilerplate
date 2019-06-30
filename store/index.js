import { createStore, combineReducers } from 'redux';
import counter from '~store/counter/reducer';

const reducers = combineReducers({ counter });
const makeStore = initialState => createStore(reducers, initialState);

export default makeStore;
