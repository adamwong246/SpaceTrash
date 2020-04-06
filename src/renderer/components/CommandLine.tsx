import * as React from 'react';
import {connect} from "react-redux";

import {NEW_COMMAND, SET_VIDEO, TELEPORT} from '../redux/actionTypes';
import {commandLinePropsSelector} from "../redux/selectors";

import CommandParser from '../lib/CommandParser.ts';

class CommandLine extends React.Component<{
  newCommand(value, scripts, store): null;
  commandLine: any;
  focus: number;
  scripts: {};
  store: any
}, {
  value: string;
}> {


  render() {
    const commandLine = this.props.commandLine
    const notification = this.props.commandLine.notification

    return (<div id="command-bar">
      <div id="notification">{notification}</div>

      <div id="command-line" className={commandLine.focus ? 'focus' : ''} ><p>{commandLine.input}</p></div>

    </div>);

  }
};

const mapStateToProps = state => {
  return commandLinePropsSelector(state);
};

const mapActionsToProps = dispatch => {
  return {
    newCommand: (value, scripts, store) => CommandParser.parse(dispatch, value, store)
  }
};

export default connect(mapStateToProps, mapActionsToProps)(CommandLine);
