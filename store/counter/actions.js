import { INCREMENT, DECREMENT } from '~store/counter/actionTypes';

export const incrementCount = () => ({ type: INCREMENT });
export const decrementCount = () => ({ type: DECREMENT });
