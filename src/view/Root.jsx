import React from 'react';
import { connect } from 'react-redux'
import { incr } from '../model/counter.jsx'

class RootComponent extends React.Component {
    render() {
        return (
            <p onClick={this.props.onclick}>Hello World {this.props.counter}</p>
        );
    }
}

const Root = connect(
  (state) => {
      return state.counter;
  },
  (dispatch) => {
      return {
          onclick: () => {
              dispatch(incr())
              return false
          }
      };
  }
)(RootComponent)

export default Root
