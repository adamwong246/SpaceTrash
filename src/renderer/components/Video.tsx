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
    const longestRay = rays.reduce((mm, ray) => Math.max(mm, ray.rayDistance), 0)
    return (<div id="video" >

      <table>
        <tr>
          <td>
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
          </td>

          <td>

          <svg height="500" width="500">
            <circle cx="250" cy="250" r="250" stroke="green" strokeWidth="3" fill="gray" />

            <line
              key={`ray-min`}
              stroke={'white'}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              vectorEffect="non-scaling-stroke"
              transform={`translate(250, 250) scale(${250}) rotate(120, 0, 0)`}
              strokeWidth="2"
            />

            <line
              key={`ray-max`}
              stroke={'white'}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              vectorEffect="non-scaling-stroke"
              transform={`translate(250, 250) scale(${250}) rotate(240, 0, 0)`}
              strokeWidth="2"
            />


            {
              rays.map((r, ndx) => {
                if (r){
                  return (
                    <line
                      key={`ray-${ndx}`}
                      stroke={'white'}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                      vectorEffect="non-scaling-stroke"
                      transform={`translate(250, 250) scale(${250 * (r.rayDistance / longestRay) - 1}) rotate(${ndx+120}, 0, 0)`}
                    />
                  )
                }

              })
            }

          </svg>

          </td>

        </tr>
        <tr>
        <td>

        <div id="video-info">
          <p># {drone.id} aka {drone.name}</p>
          <p>x: {drone.x} </p>
          <p>y: {drone.y} </p>
          <p>dir :{drone.direction}</p>
          <p>EXPLOSION: 0%</p>
          <p>RADIATION: 0%</p>
          <p>EMP: 0%</p>
        </div>

        </td>
        <td>

        <p>EXPLOSION: 0%</p>
        <p>RADIATION: 0%</p>
        <p>EMP: 0%</p>

        </td>
        </tr>
      </table>






    </div>);
  }
}

const mapStateToProps = state => {
  return getVideoProps(state);
};


export default connect(mapStateToProps)(Video);
