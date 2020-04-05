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

    commandLineInput;

    constructor(a) {
      super(a);

      this.state = {
        value: ""
      };

      this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(){
      this.commandLineInput.focus();
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
    const notification = this.props.commandLine.notification

    return (<div id="command-bar">
      {notification}
      <form onSubmit={(event) => {
        event.preventDefault()
        this.resetState()
        this.props.newCommand(this.state.value, this.props.scripts, this.props.store)
      }}>
        <input
          autoComplete={'off'}
          ref={(input) => { this.commandLineInput = input; }}
          id="command-line" type="text" value={this.state.value} onChange={this.handleChange}/>
      </form >
    </div>);

  }
};

const mapStateToProps = state => {
  return commandLinePropsSelector(state);
};

const mapActionsToProps = dispatch => {
  return {
    newCommand: (value, scripts, store) => CommandParser.parse(dispatch, value, scripts, store)
  }
};

export default connect(mapStateToProps, mapActionsToProps)(CommandLine);
