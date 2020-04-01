import * as React from 'react';
import {connect} from "react-redux";

import {getVideoProps} from "../redux/selectors";
import {TELEPORT} from "../redux/actionTypes";

import style from "../style/raycast.css";


class Video extends React.Component<{materializedMap, camera, teleport}, {}>{
  render(){

    const {camera, materializedMap} = this.props;

    return (<div >

      <div id="screen">
      	<div id="floor"></div>
      	<div id="ceiling"></div>
      </div>

      <div id="minimapcontainer">
      	<canvas id="minimap"></canvas>
      	<canvas id="minimapobjects"></canvas>
      </div>

      <div id="debug"></div>


    </div>);
  }
}

const mapStateToProps = state => {
  return getVideoProps(state);
};

const mapActionsToProps = dispatch => {
  return {
    teleport: (camera, key, value) => {
      dispatch(
        {
          type: TELEPORT,
          payload: {
            ...camera,
            [key]: value
          }
        })
    }
  }
};


export default connect(mapStateToProps)(Video);
