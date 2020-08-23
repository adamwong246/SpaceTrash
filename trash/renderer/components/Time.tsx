import * as React from 'react';
import { connect } from "react-redux";

import {getTimeProps} from '../redux/selectors.js';

class App extends React.Component<{
  time: number;
}, {}> {

  render() {
    return (<span id="time">{this.props.time}</span>);
  }
}

const mapStateToProps = state => {
  return getTimeProps(state);
};

export default connect(mapStateToProps)(App);
