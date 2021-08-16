import { Component } from 'inferno';
import { createElement } from 'inferno-create-element';
import * as ROT from "rot-js";

import { Rectangle } from '../vendor/2d-visibility/src/rectangle';
import { Segment } from '../vendor/2d-visibility/src/segment';
import { Point, Lightsource } from '../vendor/2d-visibility/src/point.ts';
import { preLoadMap } from '../vendor/2d-visibility/src/load-map.ts';

import { selector as cameraLightMarkersSelector } from "./lights/selector.ts";
import PolygonBooleanLib from './PolygonBooleanLib/index.ts';

import Fps from "./Fps.js";

interface IState {
  cameraDistance: number
  camerarays: boolean
  fudge: number
  height: number
  knownMap: any
  lightDistance: number
  lightrays: boolean
  lightSource: { x: number, y: number }
  lightsPolygons: boolean
  markers: any[]
  menuOpen: boolean
  mouseX: number
  mouseY: number
  preloadedMap: any
  showWallSegments: boolean
  visibility: any[]
  visibleMap: any[]
  width: number
  cameraLightsIntersectionPolygon: boolean
  showLiveMap: boolean;
};

const initialState: IState = {
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
  menuOpen: false,
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
  showLiveMap: false

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
    // const preloadedMap: Segment[] = this.state.preloadedMap;

    const lightVisibility = cameraLightMarkersSelector(this.state);
    const cameraLightMouse: Lightsource = new Lightsource(new Point(this.state.mouseX, this.state.mouseY), this.state.cameraDistance);


    const visMap = lightVisibility.visibleMap.filter((l) => l.slices.length);
    // console.log("visMap", visMap);

    //////////////////////////////////////////////////

    return createElement("div", {}, [
      createElement("button", { id: "menuOpenButton", onClick: e => this.setState({ menuOpen: true }) }, 'menu'),

      createElement(Fps, {}),

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
        }, [
          createElement("button", {
            className: "closebtn",
            onClick: e => this.setState({
              menuOpen: false
            })
          }, "close"),

          createElement("h1", null, "Duskers-like experiment #3"),

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
      ]),

      createElement("svg", {
        width: "100%",
        height: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          stroke: 'black'
        },
        onMouseMove: e => this.onMouseMove(e),
        onClick: e => this.placeMarker(e)
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
            r: 4,
            fill: "blue",
            stroke: "black"
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
      createElement("p", { className: 'footer' }, "Move the mouse to change the position of the camera. Click to place a light source."),
    ]);
  }
}

export default App;



  // isInTriangle(marker, points, light) {
  //   return PointInTriangle(marker, light, points.first, points.second);
  // }

// const intersector = (linesA, linexB) => {
//   return linesA + linexB;
// };
// const sign = (p1, p2, p3) => {
//   return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
// };
// const PointInTriangle = (pt, v1, v2, v3) => {
//   const d1 = sign(pt, v1, v2);
//   const d2 = sign(pt, v2, v3);
//   const d3 = sign(pt, v3, v1);
//   const has_neg = d1 < 0 || d2 < 0 || d3 < 0;
//   const has_pos = d1 > 0 || d2 > 0 || d3 > 0;
//   return !(has_neg && has_pos);
// };


          // lightVisibility.reducedLitSegments.map(marker => {
          //   const buffer = fudge * (this.state.height + 1) * 2;
          //   return createElement("g", {},

          //     [createElement("line", {
          //       x1: marker.first.x * fudge,
          //       y1: marker.first.y * fudge + buffer,
          //       x2: marker.second.x * fudge,
          //       y2: marker.second.y * fudge + buffer,
          //       stroke: "orange"
          //     }), createElement("circle", {
          //       cx: marker.first.x * fudge,
          //       cy: marker.first.y * fudge + buffer,
          //       r: 1,
          //       // x2: marker.second.x * fudge,
          //       // y2: marker.second.y * fudge + buffer,
          //       stroke: "orange",
          //       fill: "orange"
          //     }), createElement("circle", {
          //       cx: marker.second.x * fudge,
          //       cy: marker.second.y * fudge + buffer,
          //       r: 1,
          //       // x2: marker.second.x * fudge,
          //       // y2: marker.second.y * fudge + buffer,
          //       stroke: "orange",
          //       fill: "orange"
          //     })
          //     ]);
          // }),

          // this.state.knownMap && this.state.knownMap.regions.map((region) => {
          //   return createElement('polygon', {
          //     fill: "green",
          //     stroke: "green",
          //     points: region.reduce((mm, coord) => {
          //         return mm.concat(`${coord[0] * fudge}, ${coord[1] * fudge}`)
          //       }, [])
          //       .join(' ')
          //   });
          // }),


                    // this.state.lightsPolygons &&
          // lightsPolygons &&
          // lightsPolygons.regions.map((region) => {
          //   return (
          //     createElement('polygon', {
          //       fill: "yellow",
          //       stroke: "black",
          //       points: region.map((coord) => `${coord[0] * fudge}, ${coord[1] * fudge}`).join(' ')
          //     })
          //   );
          // }),


          // cameraVisibility && cameraVisibility.map(v => {
          //   const firstPoint = v.first;
          //   const secondPoint = v.second;
          //   const props = {
          //     x1: firstPoint.x * fudge,
          //     y1: firstPoint.y * fudge,
          //     x2: secondPoint.x * fudge,
          //     y2: secondPoint.y * fudge
          //   };
          //   const cameraX = cameraLightMouse.position.x * fudge;
          //   const cameraY = cameraLightMouse.position.y * fudge;
          //   const buffer = fudge * (this.state.height + 1);

          //   return [
          //     this.state.camerarays && createElement("line", {
          //       x1: cameraX,
          //       y1: cameraY + buffer,
          //       x2: props.x1,
          //       y2: props.y1 + buffer,
          //       stroke: "blue",
          //       'stroke-dasharray': fudge / 10
          //     }),
          //     this.state.camerarays && createElement("line", {
          //       x1: cameraX,
          //       y1: cameraY + buffer,
          //       x2: props.x2,
          //       y2: props.y2 + buffer,
          //       stroke: "blue",
          //       'stroke-dasharray': fudge / 10
          //     }),
          //     createElement("line", {
          //       x1: props.x1,
          //       y1: props.y1 + buffer,
          //       x2: props.x2,
          //       y2: props.y2 + buffer,
          //       stroke: "blue",

          //     })
          //   ];
          // }),