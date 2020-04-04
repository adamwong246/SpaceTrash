import * as React from 'react';
import {connect} from "react-redux";

import {getVideoProps} from "../redux/selectors";
import {TELEPORT} from "../redux/actionTypes";

import style from "../style/raycast.css";

class Video extends React.Component<{rays, drone}, {}>{
  constructor(a) {
    super(a);
  }

  render(){

    const {drone} = this.props;
    const rays = this.props.rays.screen;
    return (<div id="video" >
      <div id="screen">
      	<div id="floor"></div>
      	<div id="ceiling"></div>

				<div>
					{
						rays.map((r, ndx) => {
							if (r){
								/** @type {React.CSSProperties} */
								const style= {
									position: 'absolute',
									height: r.style.height,
									top: r.style.top,
									left: r.style.left,
									width: r.style.width,
									clip: r.style.clip,
									zIndex: r.style.zIndex
								} as any
								return (
									<img
										key={`strip-${ndx}`}
										src={r.style.src}
										style={style}
									/>
								)
							}

						})
					}
				</div>
      </div>


			<div id="video-info">
				<p>#{drone.id} {drone.name}</p>
				<p>x:{drone.x} y:{drone.y} direction:{drone.direction}</p>
			</div>

    </div>);
  }
}

const mapStateToProps = state => {
  return getVideoProps(state);
};


export default connect(mapStateToProps)(Video);
