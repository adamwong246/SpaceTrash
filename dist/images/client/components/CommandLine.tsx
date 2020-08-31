import * as React from 'react';
import { connect } from "react-redux";

import CommandParser from '../lib/CommandParser.ts';

class CommandLine extends React.Component<{
  newCommand(value, scripts, store, broadcast): null;
  broadcast: any;
  // commandLine: any;
  // focus: number;
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

  componentWillReceiveProps() {
    // this.commandLineInput.focus();
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return { value };
    });
  }

  resetState() {
    this.setState({ value: '' })
  }

  render() {
    return (<div id="command-line">


      <button>Upload</button>
      <form onSubmit={(event) => {
        event.preventDefault()
        this.resetState()
        this.props.newCommand(this.state.value, this.props.scripts, this.props.store, this.props.broadcast)
      }}>
        <input
          autoComplete={'off'}
          ref={(input) => { this.commandLineInput = input; }}
          type="text" value={this.state.value} onChange={this.handleChange} />
      </form >




    </div>);

  }
};

const mapStateToProps = state => {
  // return commandLinePropsSelector(state);
  return state;
};

const mapActionsToProps = dispatch => {
  return {
    newCommand: (value, scripts, store, broadcast) => CommandParser.parse(dispatch, value, store, broadcast)
  }
};

export default connect(mapStateToProps, mapActionsToProps)(CommandLine);
