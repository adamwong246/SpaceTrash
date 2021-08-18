import { Component, createElement } from "react";
import { createMachine, interpret, StateMachine } from "xstate";
import * as ROT from "rot-js";
import { v4 as uuidv4 } from "uuid";
import MonacoEditor from "react-monaco-editor";

import { Rectangle } from "../vendor/2d-visibility/src/rectangle";
import { Segment } from "../vendor/2d-visibility/src/segment";
import { Point, Lightsource } from "../vendor/2d-visibility/src/point.ts";
import { preLoadMap } from "../vendor/2d-visibility/src/load-map.ts";

import { selector as cameraLightMarkersSelector } from "./lights/selector.ts";
import PolygonBooleanLib from "./PolygonBooleanLib/index.ts";

import Fps from "./Fps.js";
import xStateFixture from "./xStateFixture.ts";
import fixture1 from "./fixture1.ts";
import hoverPlugin from "./hoverPlugin";

import fillingGlassPlugin from "./fillingGlassPlugin";
import { IDrone, IState, MENU_ABOUT, MENU_DRONE } from "./types";

import style from "./style";

const plugins: StateMachine<any, any, any>[] = [fillingGlassPlugin];

const initialState: IState = {
  clock: 0,
  droneIconSelected: null,
  droneIconHighlighted: null,
  menuOpenToDrone: null,
  fudge: 14, // zoom level

  // the dimensions of the map
  width: 25,
  height: 10,

  // knownMap: [],
  lightSource: {
    x: 0,
    y: 0,
  },
  // markers: [],
  menuOpen: null,
  mouseX: 0,
  mouseY: 0,
  preloadedMap: [],
  visibility: [],
  visibleMap: [],

  // knownMap: { segments: [], inverted: false },
  knownMap: {
    regions: [],
    inverted: false,
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
      name: "bob",
      x: 1,
      y: 1,
      r: 1,
      triangles: [],
      plugins: [
        {
          xstate: xStateFixture,
          promiseState: {},
          uid: uuidv4(),
          name: "blinker",
        },
        {
          xstate: hoverPlugin,
          promiseState: {},
          uid: uuidv4(),
          name: "hovering unit 3",
        },
      ],
    },
    {
      uid: uuidv4(),
      name: "larry",
      x: 2,
      y: 2,
      r: 2,
      triangles: [],

      plugins: [
        {
          xstate: fixture1,
          promiseState: {},
          uid: uuidv4(),
          name: "blinker v0.9",
        },
        {
          xstate: hoverPlugin,
          promiseState: {},
          uid: uuidv4(),
          name: "hovering unit 2",
        },
      ],
    },

    {
      uid: uuidv4(),
      name: "curly",
      x: 3,
      y: 3,
      r: 3,
      triangles: [],

      plugins: [
        {
          xstate: hoverPlugin,
          promiseState: {},
          uid: uuidv4(),
          name: "hovering unit",
        },
      ],
    },
  ],
};

const SpaceTrash = {
  hello: "hello world",
};

class App extends Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    this.resetMapDungeon();
  }

  // startRun() {
  //   this.state.drones.forEach((d) => {
  //     d.promiseMachine.send({ type: 'TOGGLE' });
  //   });
  //   // this.startRun();
  // };

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
          wallType: "foo",
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
      drones: this.state.drones.map((d) => {
        return {
          ...d,
          plugins: d.plugins.map((p) => {
            const xMachine = createMachine(p.xstate);
            const promiseMachine = interpret(xMachine).onTransition((state) =>
              console.log("PROMISE SERVICE:", state.value)
            );
            promiseMachine.start();
            const promiseState = promiseMachine.state;

            return {
              ...p,
              promiseState,
              promiseMachine,
            };
          }),
        };
      }),
      preloadedMap: preLoadMap(
        new Rectangle(0, 0, 0, 0, { x: 0, y: 0, wallType: "idk" }),
        [],
        PolygonBooleanLib.polygon(
          PolygonBooleanLib.segments({
            regions: walls.map((segment) => {
              return [
                [segment.p1.x, segment.p1.y],
                [segment.p2.x, segment.p2.y],
              ];
            }),
          })
        )
      ),
    });
  }

  stepOnce() {
    const stepSize = 0.1;

    this.setState({
      clock: this.state.clock + 1,
      drones: this.state.drones.map((drone) => {
        let x = drone.x;
        let y = drone.y;

        if (
          drone.plugins.some(
            (plugin) => plugin.promiseState.value.leftRight === "west"
          )
        ) {
          x = x - stepSize;
        }
        if (
          drone.plugins.some(
            (plugin) => plugin.promiseState.value.leftRight === "east"
          )
        ) {
          x = x + stepSize;
        }

        if (
          drone.plugins.some(
            (plugin) => plugin.promiseState.value.backForth === "north"
          )
        ) {
          y = y - stepSize;
        }
        if (
          drone.plugins.some(
            (plugin) => plugin.promiseState.value.backForth === "south"
          )
        ) {
          y = y + stepSize;
        }

        return {
          ...drone,
          x,
          y,
        };
      }),
    });
    // this.setState({
    //   drones: this.state.drones.map((d) => {
    //     return {
    //       ...d,
    //       plugins: d.plugins.map((p) => {
    //         return {
    //           ...p,
    //           promiseState: p.promiseMachine.send({ type: "TOGGLE" }),
    //         };
    //       }),
    //     };
    //   }),
    // });
  }

  fire(droneId, pluginId, type) {
    this.setState({
      drones: this.state.drones.map((d) => {
        if (d.uid === droneId) {
          d.plugins = d.plugins.map((p) => {
            if (p.uid === pluginId) {
              p.promiseState = p.promiseMachine.send({ type });
            }
            return p;
          });
        }
        return d;
      }),
    });
  }

  reset(droneId, pluginId) {
    this.setState({
      drones: this.state.drones.map((d) => {
        if (d.uid === droneId) {
          d.plugins = d.plugins.map((p) => {
            if (p.uid === pluginId) {
              p.promiseState = p.promiseMachine.start();
            }
            return p;
          });
        }
        return d;
      }),
    });
  }

  onMouseMove(event) {
    this.setState({
      mouseX: event.clientX / this.state.fudge,
      mouseY: event.clientY / this.state.fudge,
    });
  }

  spawnUpgradeOnDrone(pluginUid: string, drone: IDrone): any {
    const plugin = plugins.find((p) => p.id === pluginUid);
    const promiseMachine = interpret(plugin).onTransition((state) =>
      console.log("v2", state.value)
    );
    promiseMachine.start();
    const promiseState = promiseMachine.state;

    this.setState({
      drones: this.state.drones.map((d) => {
        return {
          ...d,
          plugins: d.uid === drone.uid ? d.plugins.concat({
            promiseState,
            promiseMachine,
            uid: uuidv4(),
            name: `spawned ${plugin.id}`,
          }) : d.plugins
        }
      })
    })

    
  }

  // placeMarker(event) {
  //   this.setState({
  //     markers: this.state.markers.concat({
  //       x: event.clientX / this.state.fudge,
  //       y: event.clientY / this.state.fudge
  //     })
  //   });
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // const overlayStyle(menuIsOpen: any) {
  //   return {
  //     width: menuIsOpen === null ? "0%" : "100%",
  //     'background-color': 'rgba(0, 0, 0, 0.9)'
  //   };
  // }

  render() {
    const fudge = this.state.fudge;
    const lightVisibility = cameraLightMarkersSelector(this.state);
    const cameraLightMouse: Lightsource = new Lightsource(
      new Point(this.state.mouseX, this.state.mouseY),
      this.state.cameraDistance
    );
    const visMap = lightVisibility.visibleMap.filter((l) => l.slices.length);

    //////////////////////////////////////////////////

    return createElement("div", {}, [
      createElement(
        "div",
        {
          id: "myNav",
          style: style.overlay(this.state.menuOpen),
        },
        [
          createElement(
            "div",
            {},
            [
              [
                this.state.menuOpen === MENU_ABOUT && [
                  createElement(
                    "pre",
                    null,
                    `
// spaceTrash v0.0.5
// a game about programming robots in space

10 find and upgrade drones
20 use drones to scavage for supplies
30 GOTO 10

`,
                    createElement(
                      "a",
                      {
                        href: "https://github.com/andrienko/2d-visibility/tree/updated-versions",
                      },
                      "https://github.com/andrienko/2d-visibility/tree/updated-versions"
                    ),
                    `\n`,
                    createElement(
                      "a",
                      {
                        href: "https://www.redblobgames.com/articles/visibility/",
                      },
                      "https://www.redblobgames.com/articles/visibility/"
                    ),
                    `\n`,
                    createElement(
                      "a",
                      { href: "https://ondras.github.io/rot.js" },
                      "https://ondras.github.io/rot.js"
                    ),
                    `\n`,
                    createElement(
                      "a",
                      { href: "https://github.com/velipso/polybooljs" },
                      "https://github.com/velipso/polybooljs"
                    )
                  ),
                ],

                this.state.menuOpen === MENU_DRONE && [
                  this.state.menuOpenToDrone === null && [
                    createElement(
                      "ul",
                      {},
                      this.state.drones.map((drone) => {
                        return createElement("li", {}, [
                          createElement(
                            "span",
                            {},
                            `${drone.name}, #${drone.uid}`
                          ),

                          createElement(
                            "ul",
                            {},
                            drone.plugins.map((p) => {
                              const computedState =
                                p.promiseState.value || p.xstate.initial;

                              return createElement(
                                "li",
                                {},
                                createElement("p", {}, `${p.name}, #${p.uid}`),

                                createElement(
                                  "pre",
                                  {},
                                  JSON.stringify(computedState, null, 2)
                                ),

                                (p.promiseState.nextEvents || []).map((k) => {
                                  return createElement(
                                    "button",
                                    {
                                      onClick: (e) =>
                                        this.fire(drone.uid, p.uid, k),
                                    },
                                    k
                                  );
                                })
                              );
                            })
                          ),

                          createElement(
                            "select",
                            {
                              onChange: (e) => this.spawnUpgradeOnDrone(e.target.value, drone),
                            },

                            [
                              createElement(
                                "option",
                                { value: null },
                                ' - '
                              ),

                              ...plugins.map((p) => {
                                return createElement(
                                  "option",
                                  { value: p.id },
                                  p.id
                                );
                              }),


                            ]
                            
                          ),

                          // createElement(
                          //   "button",
                          //   {
                          //     onClick: (e) =>
                          //       this.setState({
                          //         menuOpenToDrone: drone.uid,
                          //       }),
                          //   },
                          //   "open"
                          // ),
                        ]);
                      })
                    ),
                  ],

                  this.state.menuOpenToDrone !== null && [
                    createElement("h3", {}, `# ${this.state.menuOpenToDrone}`),

                    createElement(
                      MonacoEditor,
                      {
                        width: 800,
                        height: "70vh",
                        language: "json",
                        theme: "vs-dark",
                        value: JSON.stringify(
                          this.state.drones.find(
                            (d) => d.uid === this.state.menuOpenToDrone
                          ).xstate,
                          null,
                          2
                        ),
                      },
                      []
                    ),

                    createElement(
                      "button",
                      {
                        onClick: (e) =>
                          this.setState({
                            menuOpenToDrone: null,
                          }),
                      },
                      `close`
                    ),

                    createElement(
                      "button",
                      {
                        onClick: (e) =>
                          this.setState({
                            menuOpenToDrone: null,
                          }),
                      },
                      `save`
                    ),
                  ],
                ],
              ],
            ]
          ),
        ]
      ),

      createElement(
        "svg",
        {
          width: "90%",
          height: "90%",
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            stroke: "black",
            // cursor: 'none'
          },
          onMouseMove: (e) => this.onMouseMove(e),
          // onClick: e => this.placeMarker(e)
        },

        [
          this.state.showWallSegments &&
            this.state.preloadedMap &&
            this.state.preloadedMap.map((segment) => {
              return createElement("g", {}, [
                createElement("line", {
                  stroke: "black",
                  x1: segment.p1.x * fudge,
                  y1: segment.p1.y * fudge,
                  x2: segment.p2.x * fudge,
                  y2: segment.p2.y * fudge,
                }),

                createElement("circle", {
                  stroke: "black",
                  cx: segment.p1.x * fudge,
                  cy: segment.p1.y * fudge,
                  r: fudge / 10,
                }),

                createElement("circle", {
                  stroke: "black",
                  cx: segment.p2.x * fudge,
                  cy: segment.p2.y * fudge,
                  r: fudge / 10,
                }),
              ]);
            }),

          // createElement('g', {}, this.state.drones.map((d) => createElement('circle', {
          //   cx: d.x * fudge,
          //   cy: d.y * fudge,
          //   r: fudge / 2,
          //   stroke: "red",
          // }))),

          lightVisibility.markers.map((marker) => {
            return marker.triangles.map((triangle) => {
              const buffer = fudge * (this.state.height + 1);
              return createElement("g", {}, [
                this.state.lightrays &&
                  createElement("line", {
                    x1: marker.x * fudge,
                    y1: marker.y * fudge + buffer,
                    x2: triangle.first.x * fudge,
                    y2: triangle.first.y * fudge + buffer,
                    stroke: "red",
                    "stroke-dasharray": fudge / 10,
                  }),
                this.state.lightrays &&
                  createElement("line", {
                    x1: marker.x * fudge,
                    y1: marker.y * fudge + buffer,
                    x2: triangle.second.x * fudge,
                    y2: triangle.second.y * fudge + buffer,
                    stroke: "red",
                    "stroke-dasharray": fudge / 10,
                  }),

                createElement("circle", {
                  cx: triangle.first.x * fudge,
                  cy: triangle.first.y * fudge + buffer,
                  r: 1,
                  stroke: "red",
                  fill: "red",
                }),

                createElement("circle", {
                  cx: triangle.second.x * fudge,
                  cy: triangle.second.y * fudge + buffer,
                  r: 1,
                  stroke: "red",
                  fill: "red",
                }),

                createElement("line", {
                  x1: triangle.first.x * fudge,
                  y1: triangle.first.y * fudge + buffer,
                  x2: triangle.second.x * fudge,
                  y2: triangle.second.y * fudge + buffer,
                  stroke: "red",
                }),
              ]);
            });
          }),

          visMap.map((line) => {
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
                "stroke-dasharray": mappeddashArray,
                "data-breadth": line.breadth * fudge,
              }),
            ]);
          }),

          ...this.state.drones.map((d) => {
            return createElement("circle", {
              cx: d.x * fudge,
              cy: d.y * fudge,
              r: 4,
              fill:
                d.plugins[0]?.promiseMachine?.state.value === "active"
                  ? "green"
                  : "orange",
              stroke: "black",
              onMouseOver: (e) =>
                this.setState({ droneIconHighlighted: d.uid }),
              onMouseLeave: (e) =>
                this.setState({ droneIconHighlighted: null }),
              strokeWidth: this.state.droneIconHighlighted === d.uid ? 2 : 1,

              onClick: (e) => this.setState({ droneIconSelected: d.uid }),
            });
          }),

          createElement("circle", {
            cx: cameraLightMouse.position.x * fudge,
            cy: cameraLightMouse.position.y * fudge,
            r: fudge / 4,
            fill: "transparent",
            stroke: "green",
            strokeWidth: 3,
          }),
        ]
      ),

      createElement("div", { style: style.gui }, [
        createElement(Fps, {}),

        this.state.menuOpen === MENU_ABOUT
          ? createElement(
              "button",
              {
                onClick: (e) => this.setState({ menuOpen: null }),
              },
              "about *"
            )
          : createElement(
              "button",
              {
                onClick: (e) => this.setState({ menuOpen: MENU_ABOUT }),
              },
              "about"
            ),


            this.state.menuOpen === MENU_DRONE
          ? createElement(
              "button",
              {
                onClick: (e) => this.setState({ menuOpen: null }),
              },
              "drones *"
            )
          : createElement(
              "button",
              {
                onClick: (e) => this.setState({ menuOpen: MENU_DRONE }),
              },
              "drones"
            ),

        // createElement(
        //   "button",
        //   { onClick: (e) => this.setState({ menuOpen: MENU_DRONE }) },
        //   "machines"
        // ),

        createElement("span", {}, this.state.clock),
        createElement(
          "button",
          { onClick: (e) => this.stepOnce() },
          "+ 1"
        ),
      ]),
    ]);
  }
}

export default App;
