import * as React from 'react';
import {connect} from "react-redux";

import {NEW_COMMAND, SET_VIDEO, TELEPORT} from '../redux/actionTypes';
import {getBootProps} from "../redux/selectors";

class CommandLine extends React.Component<{
  newCommand(value): null;
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
    return (<div>
      <form onSubmit={(event) => {
        event.preventDefault()
        this.resetState()
        this.props.newCommand(this.state.value)
      }}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form >
    </div>);
  }
};

const mapStateToProps = state => {
  return getBootProps(state);
};

const mapActionsToProps = dispatch => {
  return {
    newCommand: (value) => {

      dispatch({type: NEW_COMMAND, payload: value})

      const split = value.split(' ')

      if (split[0] === SET_VIDEO){
        dispatch({type: SET_VIDEO, payload: parseInt(split[1])})
      } else if (split[0] === 'TELEPORT'){
        dispatch(
          {
            type: TELEPORT,
            payload: (
              {
                x: parseInt(split[1]),
                y: parseInt(split[2]),
                z: parseInt(split[3]),
                dx: parseInt(split[4]),
                dy: parseInt(split[5]),
                dz: parseInt(split[6]),
              }
            )
          }
        )
      }
    }
  }
};

export default connect(mapStateToProps, mapActionsToProps)(CommandLine);
