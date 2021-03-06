import React from "react";
import * as ROT from "rot-js";

import { Rectangle } from '../vendor/2d-visibility/src/rectangle.ts';
import { Segment } from '../vendor/2d-visibility/src/segment.ts';
import { Point, Lightsource } from '../vendor/2d-visibility/src/point.ts';

import { loadMap } from '../vendor/2d-visibility/src/load-map.ts';
import { calculateVisibility } from '../vendor/2d-visibility/src/visibility.ts';

// const fudge = 2
// var w = 150, h = 100;
const fudge = 10
var w = 3, h = 3;

// Setup scene
const room = new Rectangle(0, 0, 0, 0, { x: 0, y: 0, wallType: "idk" });
const walls = [];
const blocks = [];
const levelMap = [];

new ROT.Map.Uniform(w * fudge, h * fudge, {}).create((x, y, value) => {
  if (value) {
    if (!levelMap[y]) {
      levelMap[y] = []
    }
    levelMap[y][x] = value
  }
});

// new ROT.Map.Cellular(w * fudge, h * fudge).randomize(0.2).create((x, y, value) => {
//   if (value) {
//     if (!levelMap[y]) {
//       levelMap[y] = []
//     }
//     levelMap[y][x] = value
//   }
// });

new ROT.Map.Arena(w * fudge, h * fudge).create((x, y, value) => {
  if (value) {
    if (!levelMap[y]) {
      levelMap[y] = []
    }
    levelMap[y][x] = value
  }
});


const wallMap = [];
levelMap.map((row, y) => {
  if (!wallMap[y]) { wallMap[y] = [] }

  row.map((value, x) => {
    blocks.push(new Rectangle(x * fudge, y * fudge, fudge, fudge))

    if (value === 1) {
      wallMap[y][x] = {};

      // check north
      if (y - 1 < 0 || levelMap[y - 1][x] != 1) {
        wallMap[y][x].north = true
      }

      // check south
      if (y + 1 > levelMap.length - 1 || levelMap[y + 1][x] != 1) {
        wallMap[y][x].south = true
      }

      // // check west
      if (x - 1 < 0 || levelMap[y][x - 1] != 1) {
        wallMap[y][x].west = true
      }

      // check east
      if (x + 1 > levelMap[0].length - 1 || levelMap[y][x + 1] != 1) {
        wallMap[y][x].east = true
      }
    }
  })
})

wallMap.map((row, y) => {
  row.map((wallBlock, x) => {
    const wall = { x, y, wallType: "foo" }
    if (wallBlock.north) {
      walls.push(new Segment(x * fudge, y * fudge, (x + 1) * fudge, (y * fudge), wall))
    }
    if (wallBlock.south) {
      walls.push(new Segment(x * fudge, (y + 1) * fudge, (x + 1) * fudge, ((y + 1) * fudge), wall))
    }
    if (wallBlock.west) {
      walls.push(new Segment((x) * fudge, y * fudge, (x) * fudge, ((y + 1) * fudge), wall))
    }
    if (wallBlock.east) {
      walls.push(new Segment((x + 1) * fudge, y * fudge, (x + 1) * fudge, ((y + 1) * fudge), wall))
    }
  })
})

const sign = (p1, p2, p3) => {
  return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

const PointInTriangle = (pt, v1, v2, v3) => {
  const d1 = sign(pt, v1, v2);
  const d2 = sign(pt, v2, v3);
  const d3 = sign(pt, v3, v1);

  const has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
  const has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

  return !(has_neg && has_pos);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseX: 0, mouseY: 0, markers: [],
      lightSource: { x: 0, y: 0 },
      visibility: [],
      activeMarkers: [],
      knownMap: []
    }
  }

  onMouseMove(event) {

    const lightSource = new Lightsource(new Point(this.state.mouseX, this.state.mouseY), 10);
    const endpoints = loadMap(room, [], walls, lightSource.position);
    const visibility = calculateVisibility(lightSource.position, endpoints);

    const activeMarkers = visibility.reduce((mm, vPoints) => {
      return mm.concat(this.state.markers.filter((marker) => {
        return this.isInTriangle(marker, vPoints, lightSource.position);
      }))
    }, []);

    visibility.forEach((vt) => {
      if (!this.state.knownMap[vt.wall.y]) { this.state.knownMap[vt.wall.y] = [] }
      this.state.knownMap[vt.wall.y][vt.wall.x] = vt.wall.wallType
    })

    this.setState({
      activeMarkers,
      knownMap: this.state.knownMap,
      lightSource: lightSource.position,
      markers: this.state.markers,
      mouseX: event.clientX,
      mouseY: event.clientY,
      visibility,
    })

  }

  placeMarker(event) {
    this.setState({
      markers: this.state.markers.concat({ x: event.clientX, y: event.clientY })
    })
  }

  isInTriangle(marker, points, light) {
    return PointInTriangle(marker, light, points.first, points.second);
  }

  render() {
    // console.log(this.state.knownMap)
    // const lightSource = new Point(this.state.mouseX, this.state.mouseY);
    // const endpoints = loadMap(room, [], walls, lightSource);
    // const visibility = calculateVisibility(lightSource, endpoints);

    // const activeMarkers = visibility.reduce((mm, vPoints) => {
    //   return mm.concat(this.state.markers.filter((marker) => {
    //     return this.isInTriangle(marker, vPoints, lightSource);
    //   }))
    // }, []);

    // const polylinePoints = visibility.reduce((mm, v) => {
    //   const firstPoint = v[0];
    //   const secondPoint = v[1];
    //   const props = {
    //     x1: (firstPoint.x || 0),
    //     y1: (firstPoint.y || 0),
    //     x2: (secondPoint.x || 0),
    //     y2: (secondPoint.y || 0)
    //   }

    //   return mm.concat([
    //     { x: props.x1, y: props.y1 },
    //     { x: props.x2, y: props.y2 }
    //   ])
    // }, [{ x: lightSource.x, y: lightSource.y }])
    //   .reduce((mm, points) => {
    //     return mm + `${points.x},${points.y} `
    //   }, "");


    return (<div>
      {/* <pre><code>{JSON.stringify(visibility, 2, null)}</code></pre> */}
      {/* <input type="number" value={this.state.mouseX} onChange={(e) => this.setState({ mouseX: parseInt(e.target.value) })} />
      <input type="number" value={this.state.mouseY} onChange={(e) => this.setState({ mouseY: parseInt(e.target.value) })} /> */}

      <p>Move the mouse to change the position of the light/camera. Click to place a marker</p>

      <svg
        width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
        onMouseMove={(e) => this.onMouseMove(e)}
        onClick={(e) => this.placeMarker(e)}
      >

        {
          this.state.knownMap.map((row, y) => {
            return row.map((columnValue, x) => {
              return (<rect
                x={x * fudge}
                y={y * fudge}
                width={fudge}
                height={fudge}
                fill="grey"
              ></rect>)
            })
          })
        }
        {/* {
          this.props.storeState.levelMap.map((row, rowNdx) => {
            return (
              <>
                {
                  row.map((c, colNdx) => {
                    return (<rect
                      x={rowNdx * fudge} y={colNdx * fudge} width={fudge} height={fudge}
                      fill={this.props.storeState.levelMap[rowNdx][colNdx] === 1 ? "red" : "blue"}
                      strokeWidth="5"
                    >{c}</rect>)
                  })
                }
              </>
            );
          })
        } */}

        {/* {
          blocks.map((block) => {
            return (
              <rect
                x={block.x}
                y={block.y}
                width={fudge}
                height={fudge}
                fill="grey"
              // stroke="black"
              />
            );
          })
        }

        {
          walls.map((segment) => {
            return (
              <line
                x1={segment.p1.x}
                y1={segment.p1.y}
                x2={segment.p2.x}
                y2={segment.p2.y}
                stroke="red"
              />
            );
          })
        } */}

        <circle
          cx={this.state.lightSource.x}
          cy={this.state.lightSource.y}
          r={4}
          fill="yellow"
          stroke="black"
        />

        {/* <polyline fill="grey" points={polylinePoints} /> */}

        {
          this.state.visibility.map((v) => {
            // console.log(v)
            const firstPoint = v.first;
            const secondPoint = v.second;
            const props = {
              x1: (firstPoint.x),
              y1: (firstPoint.y),
              x2: (secondPoint.x),
              y2: (secondPoint.y)
            }

            return (<>
              <line
                x1={this.state.lightSource.x}
                y1={this.state.lightSource.y}
                x2={props.x1}
                y2={props.y1}
                stroke="yellow"
              />
              {/* <line
                x1={this.state.lightSource.x}
                y1={this.state.lightSource.y}
                x2={props.x2}
                y2={props.y2}
                stroke="yellow"
              /> 
              <circle
                cx={props.x1}
                cy={props.y1}
                r={fudge / 5}
                fill="black"
              />
              <circle
                cx={props.x2}
                cy={props.y2}
                r={fudge / 5}
                fill="black"
              />
              <line
                x1={props.x1}
                y1={props.y1}
                x2={props.x2}
                y2={props.y2}
                stroke="yellow"
                // strokeWidth="3px"
              /> */}

            </>)
          })
        }

        {
          this.state.activeMarkers.map((marker) => {
            return (
              <circle
                cx={marker.x}
                cy={marker.y}
                r={4}
                fill="green"
              />
            );
          })
        }
      </svg>
    </div>);
  }
}

export default App;