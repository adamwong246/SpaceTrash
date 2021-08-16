// import { Component } from 'inferno';
// import { createElement } from 'inferno-create-element';

import { Component, createElement } from 'react';
// import { createElement } from 'inferno-create-element';

import * as ROT from "rot-js";

import { v4 as uuidv4 } from 'uuid';
import MonacoEditor from 'react-monaco-editor';

import { Rectangle } from '../vendor/2d-visibility/src/rectangle';
import { Segment } from '../vendor/2d-visibility/src/segment';
import { Point, Lightsource } from '../vendor/2d-visibility/src/point.ts';
import { preLoadMap } from '../vendor/2d-visibility/src/load-map.ts';

import { selector as cameraLightMarkersSelector } from "./lights/selector.ts";
import PolygonBooleanLib from './PolygonBooleanLib/index.ts';

import Fps from "./Fps.js";
import xStateFixture from "./xStateFixture.ts";

const MENU_ABOUT = 'MENU_ABOUT'
const MENU_DRONE = 'MENU_DRONE';

interface IDrone {
  name: string
  uid: any
  xstate: any
  x: number
  y: number
  r: number;
}

interface IState {
  cameraDistance: number
  cameraLightsIntersectionPolygon: boolean
  camerarays: boolean
  drones: IDrone[]
  fudge: number
  height: number
  knownMap: any
  lightDistance: number
  lightrays: boolean
  lightSource: { x: number, y: number }
  lightsPolygons: boolean
  markers: any[]
  menuOpen: typeof MENU_ABOUT | typeof MENU_DRONE
  menuOpenToDrone: null | string
  mouseX: number
  mouseY: number
  preloadedMap: any
  showLiveMap: boolean
  showWallSegments: boolean
  visibility: any[]
  visibleMap: any[]
  width: number
};

const initialState: IState = {
  menuOpenToDrone: null,
  fudge: 14, // zoom level

  // the dimensions of the map
  width: 25,
  height: 10,

  // knownMap: [],
  lightSource: {
    x: 0,
    y: 0
  },
  markers: [],
  menuOpen: null,
  mouseX: 0,
  mouseY: 0,
  preloadedMap: [],
  visibility: [],
  visibleMap: [],

  // knownMap: { segments: [], inverted: false },
  knownMap: {
    regions: [],
    inverted: false
  },

  lightDistance: 100,
  cameraDistance: 25,

  showWallSegments: true,
  lightrays: true,
  camerarays: true,
  lightsPolygons: false,
  // showCameraPolygon: true,
  // lightsUnionPolygon: true,
  cameraLightsIntersectionPolygon: false,
  showLiveMap: false,

  drones: [
    {
      uid: uuidv4(),
      name: 'bob',
      xstate: xStateFixture,
      x: 1,
      y: 1,
      r: 1
    },
    {
      uid: uuidv4(),
      name: 'larry',
      xstate: xStateFixture,
      x: 2,
      y: 2,
      r: 2
    },
    {
      uid: uuidv4(),
      name: 'curly',
      xstate: xStateFixture,
      x: 3,
      y: 3,
      r: 3
    }
  ]

};

class App extends Component<any, IState> {
  constructor(props) { super(props); this.state = initialState; }
  componentDidMount() { this.resetMapDungeon(); }

  resetMapDungeon(width = this.state.width, height = this.state.height) {
    const levelMap = [];
    const walls = [];

    // new ROT.Map.Uniform(width, height, {}).create((x, y, value) => {
    //   if (value) {
    //     if (!levelMap[y]) {
    //       levelMap[y] = [];
    //     }

    //     levelMap[y][x] = value;
    //   }
    // });
    new ROT.Map.Arena(width, height).create((x, y, value) => {
      if (value) {
        if (!levelMap[y]) {
          levelMap[y] = [];
        }

        levelMap[y][x] = value;
      }
    });

    new ROT.Map.Cellular(width, height).randomize(0.4).create((x, y, value) => {
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
          wallMap[y][x] = {};

          // check north
          if (y - 1 < 0 || levelMap[y - 1][x] != 1) {
            wallMap[y][x].north = true;
          }

          // check south
          if (y + 1 > levelMap.length - 1 || levelMap[y + 1][x] != 1) {
            wallMap[y][x].south = true;
          }

          // check west
          if (x - 1 < 0 || levelMap[y][x - 1] != 1) {
            wallMap[y][x].west = true;
          }

          // check east
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


    // const polygonWallsSimplified = PolygonBooleanLib.segments({
    //   regions: walls.map((segment) => {
    //     return ([
    //       [segment.p1.x, segment.p1.y],
    //       [segment.p2.x, segment.p2.y]
    //     ]);
    //   })
    // })

    // const simplifiedWalls = PolygonBooleanLib.polygon(polygonWallsSimplified)
    // const preloadedMap = preLoadMap(
    //   new Rectangle(0, 0, 0, 0, { x: 0, y: 0, wallType: "idk" }),
    //   [],
    //   PolygonBooleanLib.polygon(PolygonBooleanLib.segments({
    //     regions: walls.map((segment) => {
    //       return ([
    //         [segment.p1.x, segment.p1.y],
    //         [segment.p2.x, segment.p2.y]
    //       ]);
    //     })
    //   }))
    // );

    this.setState({
      preloadedMap: preLoadMap(
        new Rectangle(0, 0, 0, 0, { x: 0, y: 0, wallType: "idk" }),
        [],
        PolygonBooleanLib.polygon(PolygonBooleanLib.segments({
          regions: walls.map((segment) => {
            return ([
              [segment.p1.x, segment.p1.y],
              [segment.p2.x, segment.p2.y]
            ]);
          })
        }))
      )
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

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    const fudge = this.state.fudge;
    const lightVisibility = cameraLightMarkersSelector(this.state);
    const cameraLightMouse: Lightsource = new Lightsource(new Point(this.state.mouseX, this.state.mouseY), this.state.cameraDistance);
    const visMap = lightVisibility.visibleMap.filter((l) => l.slices.length);

    //////////////////////////////////////////////////

    return createElement("div", {}, [


      createElement("div", {
        id: "myNav",
        className: "overlay",
        style: this.state.menuOpen !== null ? {
          width: "100%"
        } : {
          width: "0%"
        }
      }, [
        createElement("div", {
          className: "overlay-content"
        }, [
          createElement("button", {
            className: "closebtn",
            onClick: e => this.setState({
              menuOpen: null
            })
          }, "close"),

          [
            this.state.menuOpen === MENU_ABOUT && ([


              createElement("h1", null, "Duskers-like experiment #4"),

              createElement('label', { for: "showWallSegments" }, 'Show walls'),
              createElement("input", {
                type: "checkbox",
                value: "showWallSegments",
                name: "showWallSegments",
                checked: this.state.showWallSegments,
                onChange: e => this.setState({ showWallSegments: e.target.checked })
              }),



              createElement('br', {}, ''),
              createElement('label', { for: "lightDistance" }, 'Length of light rays: ' + this.state.lightDistance),
              createElement("input", {
                type: "number",
                // value: this.state.lightDistance,
                name: "lightDistance",
                onChange: (e) => {
                  this.setState({ lightDistance: e.target.value });
                }
                // onChange: e => this.setState({ lightDistance: e.target.value })
              }),
              createElement('br', {}, ''),
              createElement('label', { for: "cameraDistance" }, 'Length of cameras vision: ' + this.state.cameraDistance),
              createElement("input", {
                type: "number",
                // value: this.state.cameraDistance,
                name: "cameraDistance",
                onChange: (e) => {
                  this.setState({ cameraDistance: e.target.value });
                },
                // onChange: e => this.setState({ cameraDistance: e.target.value })
              }),

              createElement('br', {}, ''),
              createElement('label', { for: "lightrays" }, 'Show Lights-rays'),
              createElement("input", {
                type: "checkbox",
                value: "lightrays",
                name: "lightrays",
                checked: this.state.lightrays,
                onChange: e => this.setState({ lightrays: e.target.checked })
              }),

              createElement('br', {}, ''),
              createElement('label', { for: "camerarays" }, 'Show Camera-rays'),
              createElement("input", {
                type: "checkbox",
                value: "camerarays",
                name: "camerarays",
                checked: this.state.camerarays,
                onChange: e => this.setState({ camerarays: e.target.checked })
              }),

              createElement("a", { href: "https://github.com/andrienko/2d-visibility/tree/updated-versions" }, "https://github.com/andrienko/2d-visibility/tree/updated-versions"),
              createElement("a", { href: "https://www.redblobgames.com/articles/visibility/" }, "https://www.redblobgames.com/articles/visibility/"),
              createElement("a", { href: "https://ondras.github.io/rot.js" }, "https://ondras.github.io/rot.js"),
              createElement("a", { href: "https://github.com/velipso/polybooljs" }, "https://github.com/velipso/polybooljs")

            ]),
            this.state.menuOpen === MENU_DRONE && ([

              createElement('h2', {}, "DRONES"),


              this.state.menuOpenToDrone === null && [
                createElement('ul', {}, this.state.drones.map((drone) => {
                  return createElement('li', {}, [

                    createElement('button', {
                      onClick: e => this.setState({
                        menuOpenToDrone: drone.uid
                      })
                    }, 'open'),
                    `${drone.name} #${drone.uid}`,
                  ])
                }))
              ],

              this.state.menuOpenToDrone !== null && [



                createElement(MonacoEditor, {
                  width: 800,
                  height: 600,
                  language: "json",
                  theme: "vs-dark",
                  value: JSON.stringify(this.state.drones.find((d) => d.uid === this.state.menuOpenToDrone).xstate, null, 2)
                }, []),

                createElement('button', {
                  className: 'closebtn',
                  onClick: e => this.setState({
                    menuOpenToDrone: null
                  })
                }, `close ${this.state.menuOpenToDrone}`),
              ]
            ]),



          ]



        ]),
      ]),




      createElement("svg", {
        width: "100%",
        height: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          stroke: 'black',
          cursor: 'none'
        },
        onMouseMove: e => this.onMouseMove(e),
        // onClick: e => this.placeMarker(e)
      },

        [
          this.state.showWallSegments &&
          this.state.preloadedMap &&
          this.state.preloadedMap.map((segment) => {
            return createElement('g', {}, [
              createElement('line', {
                stroke: "black",
                x1: segment.p1.x * fudge,
                y1: segment.p1.y * fudge,
                x2: segment.p2.x * fudge,
                y2: segment.p2.y * fudge,
              }),

              createElement('circle', {
                stroke: "black",
                cx: segment.p1.x * fudge,
                cy: segment.p1.y * fudge,
                r: fudge / 10
              }),

              createElement('circle', {
                stroke: "black",
                cx: segment.p2.x * fudge,
                cy: segment.p2.y * fudge,
                r: fudge / 10
              }),
            ])
          }),

          createElement('g', {}, this.state.drones.map((d) => createElement('circle', {
            cx: d.x * fudge,
            cy: d.y * fudge,
            r: fudge / 2,
            stroke: "red",
          }))),


          lightVisibility.markers.map(marker => {
            return marker.triangles.map(triangle => {
              const buffer = fudge * (this.state.height + 1);
              return createElement("g", {}, [
                this.state.lightrays && createElement("line", {
                  x1: marker.x * fudge,
                  y1: marker.y * fudge + buffer,
                  x2: triangle.first.x * fudge,
                  y2: triangle.first.y * fudge + buffer,
                  stroke: "red",
                  'stroke-dasharray': fudge / 10
                }),
                this.state.lightrays && createElement("line", {
                  x1: marker.x * fudge,
                  y1: marker.y * fudge + buffer,
                  x2: triangle.second.x * fudge,
                  y2: triangle.second.y * fudge + buffer,
                  stroke: "red",
                  'stroke-dasharray': fudge / 10
                }),

                createElement("circle", {
                  cx: triangle.first.x * fudge,
                  cy: triangle.first.y * fudge + buffer,
                  r: 1,
                  stroke: "red",
                  fill: "red"
                }),

                createElement("circle", {
                  cx: triangle.second.x * fudge,
                  cy: triangle.second.y * fudge + buffer,
                  r: 1,
                  stroke: "red",
                  fill: "red"
                }),

                createElement("line", {
                  x1: triangle.first.x * fudge,
                  y1: triangle.first.y * fudge + buffer,
                  x2: triangle.second.x * fudge,
                  y2: triangle.second.y * fudge + buffer,
                  stroke: "red"
                })
              ]);
            });
          }),




          visMap.map(line => {
            const buffer = fudge * (this.state.height + 1) * 2;

            const dasharray = [0, ...line.slices, line.breadth];

            // const diff = triangle.breadth - triangle.slices[triangle.slices.length - 1];

            // if (diff > 0){
            //   dasharray.push(diff);
            // }

            const mappeddashArray = dasharray.map((d) => d * fudge);

            return createElement("g", {}, [

              // createElement("circle", {
              //   cx: line.p1.x * fudge,
              //   cy: line.p1.y * fudge + buffer,
              //   r: 1,
              //   stroke: "green",
              //   fill: "green"
              // }),

              // createElement("circle", {
              //   cx: line.p2.x * fudge,
              //   cy: line.p2.y * fudge + buffer,
              //   r: 1,
              //   stroke: "green",
              //   fill: "green"
              // }),

              createElement("line", {
                x1: line.p1.x * fudge,
                y1: line.p1.y * fudge + buffer,
                x2: line.p2.x * fudge,
                y2: line.p2.y * fudge + buffer,
                stroke: "green",
                'stroke-dasharray': mappeddashArray,
                'data-breadth': line.breadth * fudge
              })
            ]);
          }),

          createElement("circle", {
            cx: cameraLightMouse.position.x * fudge,
            cy: cameraLightMouse.position.y * fudge,
            r: fudge  / 4,
            fill: "transparent",
            stroke: "green",
            strokeWidth: 3
          }),

          ...lightVisibility.markers.map((m) => {
            return (
              createElement("circle", {
                cx: m.x * fudge,
                cy: m.y * fudge,
                r: 4,
                fill: "yellow",
                stroke: "black"
              })
            );
          })
        ],
      ),

      createElement("div", { id: "gui" }, [
        createElement(Fps, {}),
        createElement("button", { className: "", onClick: e => this.setState({ menuOpen: MENU_ABOUT }) }, 'about/settings'),
        createElement("button", { className: "", onClick: e => this.setState({ menuOpen: MENU_DRONE }) }, 'drones'),
      ])

    ]);
  }
}

export default App;
