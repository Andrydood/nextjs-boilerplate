import PropTypes from 'prop-types';

const Counter = ({ count, incrementCount, decrementCount }) => (
  <div>
    <p>{`Count:${count}`}</p>
    <button onClick={decrementCount} type="button"> - </button>
    <button onClick={incrementCount} type="button"> + </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
};

export default Counter;
