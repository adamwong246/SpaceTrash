import * as React from 'react';
import {connect} from "react-redux";

import {getVideoProps} from "../redux/selectors";
import RayCastRoom from "./Ray/RayCastRoom.tsx";
import {TELEPORT} from "../redux/actionTypes";

class Video extends React.Component<{materializedMap, camera, teleport}, {}>{
  render(){

    const {camera, materializedMap} = this.props;

    return (<div >

      <div id="wrapper" onKeyDown={(e) => alert(e)}>
        <div id="gameWorld" style={{
            transform: `rotate3d(${camera.dx}, ${camera.dy}, ${camera.dz}, ${camera.d}deg)  translate3d(${camera.x}px, ${camera.y}px, ${camera.z}px)`
          }}>
          <RayCastRoom materializedMap={materializedMap}/>
        </div>
      </div>

      {JSON.stringify(camera)}


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
