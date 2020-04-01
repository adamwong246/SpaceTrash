import * as React from 'react';
import {connect} from "react-redux";

import {NEW_COMMAND, SET_VIDEO, TELEPORT} from '../redux/actionTypes';
import {getBootProps} from "../redux/selectors";

import CommandParser from '../lib/CommandParser.ts';

class CommandLine extends React.Component<{
  newCommand(value): null;
  notification: string
}, {
  value: string;
}> {
    constructor(a) {
      super(a);

      this.state = {
        value: ""
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const {value} = event.target;
      this.setState(() => {
        return {value};
      });
    }

    resetState(){
      this.setState({value: ''})
    }

  render() {
    const notification = this.props.notification

    return (<div id="command-bar">
      {notification}
      <form onSubmit={(event) => {
        event.preventDefault()
        this.resetState()
        this.props.newCommand(this.state.value)
      }}>
        <input id="command-line" type="text" value={this.state.value} onChange={this.handleChange}/>
      </form >
    </div>);
  }
};

const mapStateToProps = state => {
  return getBootProps(state);
};

const mapActionsToProps = dispatch => {
  return {
    newCommand: (value) => CommandParser.parse(dispatch, value)
  }
};

export default connect(mapStateToProps, mapActionsToProps)(CommandLine);
