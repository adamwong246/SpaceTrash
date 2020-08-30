import * as React from 'react';

import wall3 from '../../images/walls_3.png';
import wall4 from '../../images/walls_4.png';

import { stripWidth, width}  from "../../../raycastConsts.ts";

const ABSOLLUTE = 'absolute';
const screenWidth = 320;
const screenHeight = 200;

const styleV3 = (ray, drone) => {

  const playerX = drone.x;
  const playerY = drone.y;

  const {
    hit,
    height,
    width,
    texX
  } = ray.style;

  return {
    position: ABSOLLUTE,
    zIndex: -((Math.pow((ray.x - playerX), 2) + Math.pow((ray.y - playerY), 2)) * 1000) >> 0,
    height: height,
    width: (width * 2) >> 0,
    top: Math.round((screenHeight - height) / 2),
    left: ray.id * stripWidth - texX,
    clip: "rect( 0px, " + (texX + stripWidth) + "px, " + (height) + "px, " + texX + "px)",
    src: hit ? wall4 : wall3
  }
};

export default class Raycast extends React.Component<{
  drone
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {

    const drone = this.props.drone
    const rays = drone.rays

    return (
      <div id="screen">
        <div id="floor"></div>
        <div id="ceiling"></div>

        <div>
          {
            rays.map((ray, ndx) => {
              if (ray) {


                /** @type {React.CSSProperties} */
                const style = styleV3(ray, drone) as any

                return (
                  <img
                    key={`strip-${ndx}`}
                    src={style.src}
                    style={style}
                  />
                )
              }

            })
          }
        </div>

      </div>

    )
  }
};
