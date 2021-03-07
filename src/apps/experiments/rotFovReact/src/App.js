import React from "react";
import * as ROT from "rot-js";
import { createSelector } from "reselect";
import FPSStats from "react-fps-stats";

import { Rectangle } from '../vendor/2d-visibility/src/rectangle.ts';
import { Segment } from '../vendor/2d-visibility/src/segment.ts';
import { Point, Lightsource } from '../vendor/2d-visibility/src/point.ts';

import { loadMap, preLoadMap } from '../vendor/2d-visibility/src/load-map.ts';
import { calculateVisibility } from '../vendor/2d-visibility/src/visibility.ts';

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

const initialState = {
  fudge: 5,
  height: 100,
  knownMap: [],
  lightSource: { x: 0, y: 0 },
  markers: [],
  menuOpen: false,
  mode: "dbg",
  mouseX: 0,
  mouseY: 0,
  preloadedMap: [],
  visibility: [],
  visibleMap: [],
  width: 200,
};

const markersSelector = state => state.markers
const preloadedMapSelector = state => state.preloadedMap

const cameraLightMarkersSelector = createSelector([preloadedMapSelector, markersSelector], (preloadedMap, markers) => {
  console.log("cameraLightMarkersSelector")
  return markers.map((marker) => {
    return {
      x: marker.x,
      y: marker.y,
      triangles: calculateVisibility(
        new Lightsource(new Point(marker.x, marker.y), 10),
        loadMap(
          preloadedMap,
          { x: marker.x, y: marker.y }
        )
      )
    }
  })
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  resetMapDungeon(width = this.state.width, height = this.state.height) {
    const levelMap = [];
    const walls = [];

    new ROT.Map.Uniform(width, height, {}).create((x, y, value) => {
      if (value) {
        if (!levelMap[y]) {
          levelMap[y] = []
        }
        levelMap[y][x] = value
      }
    });

    new ROT.Map.Arena(width, height).create((x, y, value) => {
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
          walls.push(new Segment(x, y, (x + 1), (y), wall))
        }
        if (wallBlock.south) {
          walls.push(new Segment(x, (y + 1), (x + 1), ((y + 1)), wall))
        }
        if (wallBlock.west) {
          walls.push(new Segment((x), y, (x), ((y + 1)), wall))
        }
        if (wallBlock.east) {
          walls.push(new Segment((x + 1), y, (x + 1), ((y + 1)), wall))
        }
      })
    })

    this.setState({
      preloadedMap: preLoadMap(
        new Rectangle(0, 0, 0, 0, { x: 0, y: 0, wallType: "idk" }),
        [],
        walls,
      )
    });
  }

  onMouseMove(event) {
    this.setState({
      mouseX: event.clientX / this.state.fudge,
      mouseY: event.clientY / this.state.fudge,
    })
  }

  placeMarker(event) {
    this.setState({
      markers: this.state.markers.concat({ x: event.clientX / this.state.fudge, y: event.clientY / this.state.fudge })
    })
  }

  isInTriangle(marker, points, light) {
    return PointInTriangle(marker, light, points.first, points.second);
  }

  render() {
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


    const cameraLightMarkers = cameraLightMarkersSelector(this.state);

    const cameraLightMouse = new Lightsource(new Point(this.state.mouseX, this.state.mouseY), 10);
    const cameraLightMouseVisibility = calculateVisibility(
      cameraLightMouse,
      loadMap(
        this.state.preloadedMap,
        cameraLightMouse.position
      )
    );

    const directlyVisibleMarkers = cameraLightMouseVisibility.reduce((mm, vPoints) => {
      return mm.concat(this.state.markers.filter((marker) => {
        return this.isInTriangle(marker, vPoints, cameraLightMouse.position);
      }))
    }, []);

    /////////
    const litLayer = [];
    cameraLightMarkers.forEach((marker) => {
      marker.triangles.forEach((triangle) => {
        if (!litLayer[triangle.wall.y]) { litLayer[triangle.wall.y] = [] }
        litLayer[triangle.wall.y][triangle.wall.x] = triangle.wall.wallType
      })
    });

    this.state.visibleMap = [];
    cameraLightMouseVisibility.forEach((vt) => {
      if (!this.state.knownMap[vt.wall.y]) { this.state.knownMap[vt.wall.y] = [] }
      if (!this.state.visibleMap[vt.wall.y]) { this.state.visibleMap[vt.wall.y] = [] }

      if (
        litLayer[vt.wall.y]
        && litLayer[vt.wall.y][vt.wall.x]
      ) {
        this.state.knownMap[vt.wall.y][vt.wall.x] = (vt.wall.wallType === "foo")
        this.state.visibleMap[vt.wall.y][vt.wall.x] = (vt.wall.wallType === "foo")
      }

    })

    const fudge = this.state.fudge;
    return (<div>

      <FPSStats top="auto" left="auto" right="0" bottom="0" />

      <div id="myNav" className="overlay" style={this.state.menuOpen ? { width: "100%" } : { width: "0%" }}>
        <button
          className="closebtn"
          onClick={(e) => this.setState({ menuOpen: false })}
        >
          close</button>
        <div className="overlay-content">
          <h1>Duskers-like clone experiment #0</h1>
          <p>Move the mouse to change the position of the camera. Click to place a light source.</p>
          {/* 
          <p>fudge</p>
          <input value={fudge} type="number" onChange={(e) => this.setState({ fudge: parseInt(e.target.value) })} />
          <p>width</p>
          <input type="number" onClick={(e) => this.setState({ width: e.target.value })} />
          <p>height</p>
          <input type="number" onClick={(e) => this.setState({ height: e.target.value })} /> */}
          <button onClick={(e) => this.resetMapDungeon()} >make a dungeon</button>
          {/* <button onClick={(e) => this.resetMapCave()} >make a cave</button> */}
          <br></br>
          <button onClick={(e) => this.setState({ knownMap: [] })} >reset known map</button>
          <br></br>
          <div onChange={(e) => this.setState({ mode: e.target.value })} >
            <input type="radio" value="fgwr" name="mode" /> Fog of War
            <input type="radio" value="dbg" name="mode" /> Debug
          </div>

          <h2>Credits</h2>
          <a href="https://github.com/andrienko/2d-visibility/tree/updated-versions">https://github.com/andrienko/2d-visibility/tree/updated-versions</a>
          <a href="https://www.redblobgames.com/articles/visibility/">https://www.redblobgames.com/articles/visibility/</a>
          <a href="https://ondras.github.io/rot.js">https://ondras.github.io/rot.js</a>
        </div>
      </div>

      <button id="menuOpenButton" onClick={(e) => this.setState({ menuOpen: true })}>menu</button>

      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
        onMouseMove={(e) => this.onMouseMove(e)}
        onClick={(e) => this.placeMarker(e)}
      >



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
        } */}

        {/* {
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



        {/* <polyline fill="grey" points={polylinePoints} /> */}

        {
          this.state.mode === "dbg" && cameraLightMouseVisibility.map((v) => {
            const firstPoint = v.first;
            const secondPoint = v.second;
            const props = {
              x1: (firstPoint.x * fudge),
              y1: (firstPoint.y * fudge),
              x2: (secondPoint.x * fudge),
              y2: (secondPoint.y * fudge)
            }

            return (<>

              <line
                x1={cameraLightMouse.position.x * fudge}
                y1={cameraLightMouse.position.y * fudge}
                x2={props.x1}
                y2={props.y1}
                stroke="blue"
              />

              <line
                x1={cameraLightMouse.position.x * fudge}
                y1={cameraLightMouse.position.y * fudge}
                x2={props.x2}
                y2={props.y2}
                stroke="blue"
              />
            </>)
          })
        }

        {
          this.state.mode === "dbg" && cameraLightMarkers.map((marker) => {
            return (marker.triangles.map((triangle) => {
              return (
                <>
                  <line
                    x1={marker.x * fudge}
                    y1={marker.y * fudge}
                    x2={triangle.first.x * fudge}
                    y2={triangle.first.y * fudge}
                    stroke="yellow"
                  /> <line
                    x1={marker.x * fudge}
                    y1={marker.y * fudge}
                    x2={triangle.second.x * fudge}
                    y2={triangle.second.y * fudge}
                    stroke="yellow"
                  />
                </>
              );
            }))

          })
        }

        {
          this.state.knownMap.map((row, y) => {
            return row.map((columnValue, x) => {
              return (columnValue ? <rect
                x={x * fudge}
                y={y * fudge}
                width={fudge}
                height={fudge}
                fill="grey"
              ></rect> : <></>)
            })
          })
        }

        {
          this.state.visibleMap.map((row, y) => {
            return row.map((columnValue, x) => {
              return (columnValue ? <rect
                x={x * fudge}
                y={y * fudge}
                width={fudge}
                height={fudge}
                fill="black"
                stroke="yellow"
              ></rect> : <></>)
            })
          })
        }

        {
          directlyVisibleMarkers.map((marker) => {
            return (
              <circle
                cx={marker.x * fudge}
                cy={marker.y * fudge}
                r={4}
                fill="yellow"
                stroke="yellow"
              />
            );
          })
        }

        <circle
          cx={cameraLightMouse.position.x * fudge}
          cy={cameraLightMouse.position.y * fudge}
          r={4}
          fill="blue"
          stroke="black"
        />
      </svg>


    </div>);
  }
}

export default App;