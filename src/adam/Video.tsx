const React = require("react");

const scopeSize = 200;
const halfScopeSize = scopeSize /2;
const blankCharacter = '.';

class Video extends React.Component<{drone, dispatcher, droneData}, {}>{
  constructor(a) {
    super(a);
  }

  render(){
    const drone = this.props.drone
    const droneData = this.props.droneData

    // const metaData = this.props.metaData
    const metaData = {
      xMin: Number.POSITIVE_INFINITY,
      yMin: Number.POSITIVE_INFINITY,
      xMax: Number.NEGATIVE_INFINITY,
      yMax: Number.NEGATIVE_INFINITY,
    }
    drone.rays.forEach((ray) => {

      const listOfTiles = (ray.brenshams || [])
      listOfTiles.forEach((tile) => {

        if (tile.x < metaData.xMin) {
          metaData.xMin = tile.x
        }
        if (tile.x > metaData.xMax) {
          metaData.xMax = tile.x
        }
        if (tile.y < metaData.yMin) {
          metaData.yMin = tile.y
        }
        if (tile.y > metaData.yMax) {
          metaData.yMax = tile.y
        }

      })

    })

    if (!drone){
      return (<span>idk, no drone found </span>)
    }

    const rays = drone.rays;
    const longestRay = rays.reduce((mm, ray) => Math.max(mm, ray.rayDistance), 0)



    const height = metaData.yMax - metaData.yMin + 1
    const width = metaData.xMax - metaData.xMin + 1

    const matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(2).fill(blankCharacter)));

    for (var yNdx = 0; yNdx < height; yNdx++) {
      for (var xNdx = 0; xNdx < width; xNdx++) {



        const x = xNdx + metaData.xMin
        const y = yNdx + metaData.yMin

        console.log(xNdx, yNdx, x, y)

        console.log("mark3", drone)
        if (droneData[drone.id].tiles[x]) {
          console.log("mark")
          if (droneData[drone.id].tiles[x][y]) {
            console.log("mark2")
            matrix[yNdx][xNdx] = droneData[drone.id].tiles[x][y]
          }
        }
      }
    }


    return (<div id="video" >
      #{drone._id}
      <table>
        <tr><td>input</td><td>output</td></tr>
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


          <svg height={scopeSize} width={scopeSize}>
            <circle cx={halfScopeSize} cy={halfScopeSize} r={halfScopeSize} strokeWidth="3" fill="gray" />

            <line
              key={`ray-min`}
              stroke={'white'}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              vectorEffect="non-scaling-stroke"
              transform={`translate(${halfScopeSize}, ${halfScopeSize}) scale(${halfScopeSize}) rotate(120, 0, 0)`}
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
              transform={`translate(${halfScopeSize}, ${halfScopeSize}) scale(${halfScopeSize}) rotate(240, 0, 0)`}
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
                      transform={`
                        translate(${halfScopeSize}, ${halfScopeSize})
                        scale(${halfScopeSize * (r.rayDistance / longestRay) - 1})
                        rotate(${(ndx/2.6)+120}, 0, 0)`}
                    />
                  )
                }

              })
            }

          </svg>

          {
            matrix && (<table className="matrix">
              <tbody>
                {matrix.map((row) => {
                  return (
                    <tr>
                      {row.map((cell) => {
                        return (
                          <td data-drone={cell[1] ? cell[1] : "" }>
                            { cell[0] }
                            {(cell[1] != "." && cell[1] != "_") && "D"}



                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>)
          }
          





          </td>

          <td>
            <table><tbody>

              <tr>
                <td></td>
                <td>
                  <button
                    onClick={() => this.props.dispatcher("DRONE_MOVE_FORWARD", drone.id) }
                  >
                    FORWARD
                  </button>
                </td>
                <td></td>
              </tr>

              <tr>
                <td><button onClick={() => this.props.dispatcher("DRONE_ROTATE_LEFT", drone.id) }>LEFT</button></td>
                <td></td>
                <td><button onClick={() => this.props.dispatcher("DRONE_ROTATE_RIGHT", drone.id) }>RIGHT</button></td>
              </tr>

              <tr>
                <td></td>
                <td><button onClick={() => this.props.dispatcher("DRONE_MOVE_BACK", drone.id) }>BACK</button></td>
                <td></td>
              </tr>

            </tbody></table>
          </td>

        </tr>

      </table>






    </div>);
  }
}

// export default = Video;
module.exports = Video
