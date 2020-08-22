const React = require("react");
// const { Tab, Tabs, TabList, TabPanel } = require("react-tabs");

const scopeSize = 200;
const halfScopeSize = scopeSize /2;

class Video extends React.Component<{drone, dispatcher}, {}>{
  constructor(a) {
    super(a);
  }

  render(){
    const drone = this.props.drone

    if (!drone){
      return (<span>idk, no drone found </span>)
    }

    const rays = drone.rays;
    const longestRay = rays.reduce((mm, ray) => Math.max(mm, ray.rayDistance), 0)
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
