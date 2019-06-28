import { createStore } from 'redux';
import reducer from './reducer';

const makeStore = initialState => createStore(reducer, initialState);

export default makeStore;
