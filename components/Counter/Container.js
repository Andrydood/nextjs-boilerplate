import { connect } from 'react-redux';

import Counter from '~components/Counter';
import { incrementCount, decrementCount } from '~store/counter/actions';

const mapStateToProps = state => ({ count: state.counter.count });
const mapDispatchToProps = { incrementCount, decrementCount };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
