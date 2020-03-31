import * as React from 'react';
import {connect} from "react-redux";

import {getVideoProps} from "../redux/selectors";
import RayCastRoom from "./Ray/RayCastRoom.tsx";

const Video = ({boardedShip, drone, camera}) => {
  return (<div >
    {JSON.stringify(camera)}

    <div id="wrapper" onKeyDown={(e) => alert(e)}>
      <div id="gameWorld" style={{
          transform: `rotate3d(${camera.dx}, ${camera.dy}, ${camera.dz}, ${camera.d}deg)  translate3d(${camera.x}px, ${camera.y}px, ${camera.z}px)`
        }}>
        <RayCastRoom map={boardedShip.map}/>
      </div>
    </div>
  </div>);
}

const mapStateToProps = state => {
  return getVideoProps(state);
};

export default connect(mapStateToProps)(Video);
