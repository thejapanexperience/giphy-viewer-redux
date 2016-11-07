import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CountActions from '../actions/CountActions';

class Counter extends Component {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

// Arrow function version
const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(CountActions.increment());
  },
  decrement() {
    dispatch(CountActions.decrement());
  },
});

// don't need both argument here
// if you only want to receive state then (mapStateToProps)
// if you only want to send actions then (null, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
