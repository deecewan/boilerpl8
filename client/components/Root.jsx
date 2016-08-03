import React, { Component, PropTypes } from 'react';

/*
Whilst in this particular case, it would be better for this component to be a pure, stateless
component, to get hot reload to work properly, there has to be one Class Component.

All components which mount inside here can be stateless and pure.
 */

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.keepAlive = true;
  }

  render() {
    return (
      <div className="test">
        Hello, Test!
        <p>Counter: {this.props.counter}</p>
      </div>
    );
  }
}

Root.propTypes = {
  counter: PropTypes.number,
};
