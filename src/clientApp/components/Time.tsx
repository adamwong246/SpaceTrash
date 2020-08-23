import * as React from 'react';
import { connect } from "react-redux";

import {getTimeProps} from '../redux/selectors.js';

class App extends React.Component<{
  clock: any;
}, {}> {

  render() {
    return (<span id="time">{this.props.clock.time} {this.props.clock.halted}</span>);
  }
}

const mapStateToProps = state => {
  return getTimeProps(state);
};

export default connect(mapStateToProps)(App);
