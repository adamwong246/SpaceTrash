import * as React from 'react';

const ABSOLLUTE = 'absolute';
const screenWidth = 320;
const screenHeight = 200;

const styleV3 = ({
  hit,
  stripIdx,
  stripWidth,
  xWallHit,
  yWallHit,
  playerX,
  playerY,
  height,
  width,
  texX
}) => {
  return {
    position: ABSOLLUTE,
    zIndex: -((Math.pow((xWallHit - playerX), 2) + Math.pow((yWallHit - playerY), 2)) * 1000) >> 0,
    height: height,
    width: (width * 2) >> 0,
    top: Math.round((screenHeight - height) / 2),
    left: stripIdx * stripWidth - texX,
    clip: "rect( 0px, " + (texX + stripWidth) + "px, " + (height) + "px, " + texX + "px)",
    src: hit ? "/walls_4.png" : "/walls_3.png"
  }
};

export default class Raycast extends React.Component<{
  drone
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {

    const rays = this.props.drone.rays

    return (


      <div id="screen">
        <div id="floor"></div>
        <div id="ceiling"></div>

        <div>
          {
            rays.map((ray, ndx) => {
              if (ray) {


                /** @type {React.CSSProperties} */
                const style = styleV3(ray.style) as any

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
