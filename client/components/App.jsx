import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { update } from '../actions/name';

function AppComponent(props) {
  return (
    <div>
      <label htmlFor="name">Enter your name: </label>
      <input name="name" onChange={e => props.update(e.target.value)} />
      <h1>Hello, {props.name}.</h1>
    </div>
  );
}

AppComponent.propTypes = {
  name: PropTypes.string,
  update: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    name: state.getIn(['name', 'name']), // property `name` inside of store for reducer `name`
  };
}

const App = connect(mapStateToProps, { update })(AppComponent);

export { App as default };
