import actionTypes from '~store/counter/actionTypes';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      });

    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
      });

    default:
      return state;
  }
};


export default reducer;
