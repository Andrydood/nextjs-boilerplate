import { createReducer } from '~lib/redux';

import { INCREMENT, DECREMENT } from '~store/counter/actionTypes';

const initialState = {
  count: 0,
};

const reducer = createReducer(initialState, {
  [INCREMENT]: state => Object.assign({}, state, {
    count: state.count + 1,
  }),
  [DECREMENT]: state => Object.assign({}, state, {
    count: state.count - 1,
  }),
});


export default reducer;
