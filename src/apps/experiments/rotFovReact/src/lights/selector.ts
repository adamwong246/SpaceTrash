
import { createSelector } from "reselect";

import { loadMap } from '../../vendor/2d-visibility/src/load-map';
import { Point, Lightsource, VizTriangle } from '../../vendor/2d-visibility/src/point';
import { Segment } from "../../vendor/2d-visibility/src/segment";
import { calculateVisibility } from '../../vendor/2d-visibility/src/visibility';

import makePolygon from "../makePolygon"
import PolygonBooleanLib from "../PolygonBooleanLib/index.ts";

const markersSelector = (state: { markers: any[] }) => state.markers;
const preloadedMapSelector = (state: { preloadedMap: Segment[] }) => state.preloadedMap;
const lightDistanceSelector = (state: { lightDistance: number }) => state.lightDistance;

// const distance = (a: Point, b: Point): number => {
//   var da = a.x - b.x;
//   var db = a.y - b.y;

//   var dc = Math.sqrt(da * da + db * db);
//   return dc;
// };

// const lineComp = (a: VizTriangle, b: VizTriangle): boolean => {
//   const epMod = 17;

//   const toReturn = (
//     Math.abs(a.first.x  - b.first.x) < (Number.EPSILON * epMod) &&
//     Math.abs(a.first.y  - b.first.y) < (Number.EPSILON * epMod) &&
//     Math.abs(a.second.x  - b.second.x) < (Number.EPSILON * epMod) &&
//     Math.abs(a.second.y  - b.second.y) < (Number.EPSILON * epMod)
//   );
//   return toReturn;
// };

// const basicallyTheSame = (a: VizTriangle, b: VizTriangle) => {
  

//   const toReturn = lineComp(a, b) || lineComp(b, a);

  
//   // if (toReturn){
//   //   console.log("--- basically the same");
//   // }
//   console.log("--- basically the same: ", toReturn);
//   return toReturn;
// };

// const isIn = (p: Point, l: VizTriangle): boolean => {

//   const dFirstP = distance(p, l.first);
//   const dSecondP = distance(p, l.second);
//   const dl = distance(l.first, l.second);

//   // console.log((distance(p, l.first) + distance(p, l.second)) - distance(l.first, l.second));
//   // console.log();
//   // return (distance(p, l.first) + distance(p, l.second)) - distance(l.first, l.second) <= Number.EPSILON;
//   // console.log(((dFirstP + dSecondP) - dl), (((dFirstP + dSecondP) - dl) < Number.EPSILON));
//   return ((dFirstP + dSecondP) - dl) < Number.EPSILON;

// };

// const slope = (vt: VizTriangle): number => {
//   const rise = (vt.first.y - vt.second.y);
//   const run = (vt.first.x - vt.second.x);
//   const s = Math.abs(rise / run);
//   if (isNaN(s)) { return 0 };
//   return s;
// };

// const overlap = (a: VizTriangle, b: VizTriangle) => {
//   const sa = slope(a);
//   const sb = slope(b);

//   // console.log(sa, sb, sa !== sb, sa - sb > Number.EPSILON);
//   // console.log('slopes: ', sa, sb);
//   if (sa !== sb) {
//     // console.log('slope mismatch: ');
//     return false;
//   } else {
//     // console.log('slopes are equal');
//     if (isIn(a.first, b) || isIn(a.second, b)) {
//       // console.log('a is inside b');
//       return true;
//     } else {
//       // console.log('a is NOT inside b');
//       return false;
//     }
//   }
// };

// const addSegments = (a: VizTriangle, b: VizTriangle) => {
//   return new VizTriangle(
//     new Point(Math.min(a.first.x, a.second.x, b.first.x, b.second.x), Math.min(a.first.y, a.second.y, b.first.y, b.second.y)),
//     new Point(Math.max(a.first.x, a.second.x, b.first.x, b.second.x), Math.max(a.first.y, a.second.y, b.first.y, b.second.y)),
//     a.wall
//   );
// };

export const makeVisibilityOfLights = (markers: any[], preloadedMap: Segment[], lightDistance: number) => {
  const markersWithVis = markers.map((marker: { x: number, y: number, triangles: [] }) => {

    const lightsource: Lightsource = new Lightsource(new Point(marker.x, marker.y), lightDistance);
    const triangles = calculateVisibility(lightsource, loadMap(preloadedMap, lightsource));

    return {
      x: marker.x,
      y: marker.y,
      triangles,
      polygon: makePolygon(triangles)
    };
  });

  // const litSegments: VizTriangle[] = markersWithVis.map((m) => m.triangles).flat();
  // const reducedLitSegments: VizTriangle[] = [];

  // console.log("\n=======\n");

  // for (let i = 0; i < litSegments.length; i++) {

  //   let s = litSegments[i];
  //   console.log("i", i);

  //   if (s) {
  //     for (let j = i + 1; j < litSegments.length; j++) {
  //       console.log("- j", j);
  //       const s2 = litSegments[j];

  //       if (s2){
  //         console.log("- comparing ", s, s2);

  //         if (basicallyTheSame(s, s2)){
  //           console.log('- match at ', i, j);
  //           s = addSegments(s, s2);
  //           delete litSegments[j];
  //           j = i;
  //         } 
  //       } else {
  //         console.log("- j2 is empty");
  //       }
  //     }
  //     reducedLitSegments.push(s);
  //   } else {
  //     // console.log("nothing at ", i);
  //   }
  // }




  return {
    markers: markersWithVis,
    // litSegments,
    // reducedLitSegments
  }
};

export const selector = createSelector([markersSelector, preloadedMapSelector, lightDistanceSelector], makeVisibilityOfLights);
