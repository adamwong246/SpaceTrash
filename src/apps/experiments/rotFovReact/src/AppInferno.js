import { Component } from 'inferno';
import { createElement } from 'inferno-create-element';
import * as ROT from "rot-js";
import PolyBool from 'polybooljs';

import { Rectangle } from '../vendor/2d-visibility/src/rectangle.ts';
import { Segment } from '../vendor/2d-visibility/src/segment.ts';
import { Point, Lightsource } from '../vendor/2d-visibility/src/point.ts';
import { loadMap, preLoadMap } from '../vendor/2d-visibility/src/load-map.ts';
import { calculateVisibility } from '../vendor/2d-visibility/src/visibility.ts';

import makePolygon from "./makePolygon"
import { selector as cameraLightMarkersSelector } from "./lights/selector.ts";

const sign = (p1, p2, p3) => {
  return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
};

const PointInTriangle = (pt, v1, v2, v3) => {
  const d1 = sign(pt, v1, v2);
  const d2 = sign(pt, v2, v3);
  const d3 = sign(pt, v3, v1);
  const has_neg = d1 < 0 || d2 < 0 || d3 < 0;
  const has_pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(has_neg && has_pos);
};

const initialState = {
  fudge: 10, // zoom level

  // the dimensions of the map
  width: 50,
  height: 50,

  knownMap: [],
  lightSource: {
    x: 0,
    y: 0
  },
  markers: [],
  menuOpen: false,
  mode: "lcv2",
  mouseX: 0,
  mouseY: 0,
  preloadedMap: [],
  visibility: [],
  visibleMap: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.resetMapDungeon()
  }

  resetMapDungeon(width = this.state.width, height = this.state.height) {
    const levelMap = [];
    const walls = [];
    new ROT.Map.Uniform(width, height, {}).create((x, y, value) => {
      if (value) {
        if (!levelMap[y]) {
          levelMap[y] = [];
        }

        levelMap[y][x] = value;
      }
    });
    new ROT.Map.Arena(width, height).create((x, y, value) => {
      if (value) {
        if (!levelMap[y]) {
          levelMap[y] = [];
        }

        levelMap[y][x] = value;
      }
    });
    const wallMap = [];
    levelMap.map((row, y) => {
      if (!wallMap[y]) {
        wallMap[y] = [];
      }

      row.map((value, x) => {
        if (value === 1) {
          wallMap[y][x] = {}; // check north

          if (y - 1 < 0 || levelMap[y - 1][x] != 1) {
            wallMap[y][x].north = true;
          } // check south


          if (y + 1 > levelMap.length - 1 || levelMap[y + 1][x] != 1) {
            wallMap[y][x].south = true;
          } // // check west


          if (x - 1 < 0 || levelMap[y][x - 1] != 1) {
            wallMap[y][x].west = true;
          } // check east


          if (x + 1 > levelMap[0].length - 1 || levelMap[y][x + 1] != 1) {
            wallMap[y][x].east = true;
          }
        }
      });
    });
    wallMap.map((row, y) => {
      row.map((wallBlock, x) => {
        const wall = {
          x,
          y,
          wallType: "foo"
        };

        if (wallBlock.north) {
          walls.push(new Segment(x, y, x + 1, y, wall));
        }

        if (wallBlock.south) {
          walls.push(new Segment(x, y + 1, x + 1, y + 1, wall));
        }

        if (wallBlock.west) {
          walls.push(new Segment(x, y, x, y + 1, wall));
        }

        if (wallBlock.east) {
          walls.push(new Segment(x + 1, y, x + 1, y + 1, wall));
        }
      });
    });
    this.setState({
      preloadedMap: preLoadMap(new Rectangle(0, 0, 0, 0, {
        x: 0,
        y: 0,
        wallType: "idk"
      }), [], walls)
    });
  }

  onMouseMove(event) {
    this.setState({
      mouseX: event.clientX / this.state.fudge,
      mouseY: event.clientY / this.state.fudge
    });
  }

  placeMarker(event) {
    this.setState({
      markers: this.state.markers.concat({
        x: event.clientX / this.state.fudge,
        y: event.clientY / this.state.fudge
      })
    });
  }

  isInTriangle(marker, points, light) {
    return PointInTriangle(marker, light, points.first, points.second);
  }

  knownMapCellFillAndStroke(value) {
    if (value === "foo") { return { fill: 'gray' } }
    return { fill: 'gray' }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    const fudge = this.state.fudge;

    const cameraLightMarkers = cameraLightMarkersSelector(this.state);
    const cameraLightMouse = new Lightsource(new Point(this.state.mouseX, this.state.mouseY), 10);
    const cameraLightMouseVisibility = calculateVisibility(cameraLightMouse, loadMap(this.state.preloadedMap, cameraLightMouse.position));
    const directlyVisibleMarkers = cameraLightMouseVisibility.reduce((mm, vPoints) => {
      return mm.concat(this.state.markers.filter(marker => {
        return this.isInTriangle(marker, vPoints, cameraLightMouse.position);
      }));
    }, []);

    //////////////////////////////////////////////////


    let cameraPolygon = {
      regions: []
    };

    let lightsPolygons;

    if (cameraLightMouseVisibility.length) {
      cameraPolygon = makePolygon(cameraLightMouseVisibility);
    }

    if (cameraLightMarkers.length) {

      lightsPolygons = cameraLightMarkers.map((light) => {
        return makePolygon(light.triangles)
      });

      console.log(lightsPolygons)
    }

    //////////////////////////////////////////////////

    const litLayer = [];
    cameraLightMarkers.forEach(marker => {
      marker.triangles.forEach(triangle => {
        if (!litLayer[triangle.wall.y]) {
          litLayer[triangle.wall.y] = [];
        }
        litLayer[triangle.wall.y][triangle.wall.x] = triangle.wall.wallType;
      });
    });

    // reset the visibleMap
    this.state.visibleMap = [];

    cameraLightMouseVisibility.forEach(vt => {
      if (!this.state.knownMap[vt.wall.y]) {
        this.state.knownMap[vt.wall.y] = [];
      }
      if (!this.state.visibleMap[vt.wall.y]) {
        this.state.visibleMap[vt.wall.y] = [];
      }
      if (litLayer[vt.wall.y] && litLayer[vt.wall.y][vt.wall.x]) {
        this.state.knownMap[vt.wall.y][vt.wall.x] = vt.wall.wallType;
        this.state.visibleMap[vt.wall.y][vt.wall.x] = vt.wall.wallType === "foo";
      }
    });


    // console.log("cameraPolygon", cameraPolygon);

    //////////////////////////////////////////////////

    return createElement("div", {},
      [
        createElement("button", { id: "menuOpenButton", onClick: e => this.setState({ menuOpen: true }) }, 'menu'),

        createElement("div", {
          id: "myNav",
          className: "overlay",
          style: this.state.menuOpen ? {
            width: "100%"
          } : {
            width: "0%"
          }
        }, [
          createElement("div", {
            className: "overlay-content"
          },
            [
              createElement("button", {
                className: "closebtn",
                onClick: e => this.setState({
                  menuOpen: false
                })
              }, "close"),

              createElement("h1", null, "Duskers-like experiment #0"), createElement("p", null, "Move the mouse to change the position of the camera. Click to place a light source."), createElement("button", {
                onClick: e => this.resetMapDungeon()
              }, "make a dungeon"),
              createElement('pre', {}, JSON.stringify(Object.keys(this.state)
                .filter(key => ['fudge', 'width', 'height', 'mode'].includes(key))
                .reduce((obj, key) => {
                  obj[key] = this.state[key];
                  return obj;
                }, {}), null, 2)),

              createElement("br", null),
              createElement("button", { onClick: e => this.setState({ knownMap: [] }) }, "reset known map"),
              createElement("br", null),
              createElement("div", { onChange: e => this.setState({ mode: e.target.value }) },

                createElement('br', {}, ''),
                createElement('label', { for: "fgwr" }, 'Fog of War'),
                createElement("input", {
                  type: "radio",
                  value: "fgwr",
                  name: "mode",
                  onClick: e => this.setState({ mode: "fgwr" })
                }),

                createElement('br', {}, ''),
                createElement('label', { for: "dbg" }, 'Lights and Camera'),
                createElement("input", {
                  type: "radio",
                  value: "dbg",
                  name: "mode",
                  onClick: e => this.setState({ mode: "dbg" })
                }),

                createElement('br', {}, ''),
                createElement('label', { for: "lcv2" }, 'Lights and Camera V2'),
                createElement("input", {
                  type: "radio",
                  value: "lcv2",
                  name: "mode",
                  onClick: e => this.setState({ mode: "lcv2" })
                }),

                createElement('br', {}, ''),
                createElement('label', { for: "fov" }, 'Field of View'),
                createElement("input", {
                  type: "radio",
                  value: "fov",
                  name: "mode",
                  onClick: e => this.setState({ mode: "fov" })
                }),

                createElement("h2", null, "Credits"),

                createElement("a", { href: "https://github.com/andrienko/2d-visibility/tree/updated-versions" }, "https://github.com/andrienko/2d-visibility/tree/updated-versions"),
                createElement("a", { href: "https://www.redblobgames.com/articles/visibility/" }, "https://www.redblobgames.com/articles/visibility/"),
                createElement("a", { href: "https://ondras.github.io/rot.js" }, "https://ondras.github.io/rot.js"))
            ]),
        ]),

        createElement("svg", {
          width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg",
          onMouseMove: e => this.onMouseMove(e),
          onClick: e => this.placeMarker(e)
        },

          [

            this.state.mode === "lcv2" &&
            cameraPolygon &&
            cameraPolygon.regions &&
            cameraPolygon.regions.map((region) => {
              return createElement('polyline', {
                fill: "blue",
                stroke: "black",
                points: region.reduce((mm, coord) => {
                  return mm.concat(`${coord[0] * fudge}, ${coord[1] * fudge}`)
                }, [])
                  .join(' ')
              });
            }),

            this.state.mode === "lcv2" &&
            lightsPolygons &&
            lightsPolygons.map((polygon) => {
              return polygon.regions.map((region) => {
                return (
                  createElement('polyline', {
                    fill: "yellow",
                    stroke: "black",
                    points: region.map((coord) => `${coord[0] * fudge}, ${coord[1] * fudge}`).join(' ')
                  })

                );
              })

            }),


            // this.state.mode === "fov"
            // && cameraLightMouseVisibility.length
            // && polygons.intersections
            // && polygons.intersections.map((intersectionPolylines) => {
            //   return createElement('polyline', {
            //     fill: "lightgrey",
            //     stroke: "black",
            //     points: intersectionPolylines.map((coord) => `${coord[0] * fudge}, ${coord[1] * fudge}`).join(' ')
            //   })
            // }),

            this.state.mode === "dbg" &&
            cameraLightMouseVisibility.map(v => {
              const firstPoint = v.first;
              const secondPoint = v.second;
              const props = {
                x1: firstPoint.x * fudge,
                y1: firstPoint.y * fudge,
                x2: secondPoint.x * fudge,
                y2: secondPoint.y * fudge
              };
              const cameraX = cameraLightMouse.position.x * fudge;
              const cameraY = cameraLightMouse.position.y * fudge;

              return [createElement("line", {
                x1: cameraX,
                y1: cameraY,
                x2: props.x1,
                y2: props.y1,
                stroke: "blue"
              }), createElement("line", {
                x1: cameraX,
                y1: cameraY,
                x2: props.x2,
                y2: props.y2,
                stroke: "blue"
              })];
            }),

            this.state.mode === "dbg" &&
            cameraLightMarkers.map(marker => {
              return marker.triangles.map(triangle => {
                return [createElement("line", {
                  x1: marker.x * fudge,
                  y1: marker.y * fudge,
                  x2: triangle.first.x * fudge,
                  y2: triangle.first.y * fudge,
                  stroke: "yellow"
                }), " ", createElement("line", {
                  x1: marker.x * fudge,
                  y1: marker.y * fudge,
                  x2: triangle.second.x * fudge,
                  y2: triangle.second.y * fudge,
                  stroke: "yellow"
                })];
              });
            }),

            this.state.knownMap.map((row, y) => {
              return row.map((columnValue, x) => {
                return columnValue ? createElement("rect", {
                  x: x * fudge,
                  y: y * fudge,
                  width: fudge,
                  height: fudge,
                  ...this.knownMapCellFillAndStroke(columnValue),
                }) : createElement('group', null);
              });
            }),

            this.state.visibleMap.map((row, y) => {
              return row.map((columnValue, x) => {
                return columnValue ? createElement("rect", {
                  x: x * fudge,
                  y: y * fudge,
                  width: fudge,
                  height: fudge,
                  fill: "transparent",
                  stroke: "black"
                }) : createElement('group', null);
              });
            }),

            directlyVisibleMarkers.map(marker => {
              return createElement("circle", {
                cx: marker.x * fudge,
                cy: marker.y * fudge,
                r: 4,
                fill: "yellow",
                stroke: "yellow"
              });
            }),

            createElement("circle", {
              cx: cameraLightMouse.position.x * fudge,
              cy: cameraLightMouse.position.y * fudge,
              r: 4,
              fill: "blue",
              stroke: "black"
            })
          ]
        )
      ]
    );
  }
}

export default App;