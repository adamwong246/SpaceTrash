import { createSelector } from "reselect";

import { loadMap } from '../../vendor/2d-visibility/src/load-map';
import { Point, Lightsource, VizTriangle, } from '../../vendor/2d-visibility/src/point';
import { Segment } from "../../vendor/2d-visibility/src/segment";
import { calculateVisibility } from '../../vendor/2d-visibility/src/visibility';

const markersSelector = (state: { markers: any[] }) => state.markers;
const preloadedMapSelector = (state: { preloadedMap: Segment[] }) => state.preloadedMap;
const lightDistanceSelector = (state: { lightDistance: number }) => state.lightDistance;

const distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

// take a line segments and "slices" of that line and organize for SVG
const visibilityLine = (mapSegment: Segment, slicesOfALine) => {

  let toReturn = [];
  let counter = 0;

  slicesOfALine.map((s) => {
    const a = distance(mapSegment.p1, s.first);
    const b = distance(mapSegment.p1, s.second);
    return [{ payload: 1, ndx: Math.min(a, b) }, { payload: -1, ndx: Math.max(a, b) }];
  }).flat(1)
    .sort((a, b) => a.ndx - b.ndx)
    .forEach(upperOrDowner => {
      const newCounter = counter + upperOrDowner.payload;
      if (counter === 0 && newCounter > 0) {
        toReturn.push(upperOrDowner.ndx);
      } else if (counter > 0 && newCounter === 0) {
        toReturn.push(upperOrDowner.ndx);
      } else {
        // no op
      }

      counter = newCounter;

    });

  return {
    ...mapSegment,
    slices: toReturn
  };
};

const makeVisibleMap = (
  mapSegments: Segment[],
  markersWithTriangles: any[]
) => {

  const toReturn = [];

  // loop over map segments
  mapSegments.forEach((mapSegment) => {

    // gather the "slices" from each bot which are of the map segment in question
    const collectiveViewsOfAWallSegment = [];
    markersWithTriangles.forEach((marker) => {
      collectiveViewsOfAWallSegment.push(...(marker.triangles
        .filter((triangle) => triangle.uid === mapSegment.uid)
        .reduce((triangles_mm, triangle_cv) => {
          triangles_mm.push(triangle_cv);
          return triangles_mm;
        }, [])));
    });

    toReturn.push(visibilityLine(mapSegment, collectiveViewsOfAWallSegment));

  });

  return toReturn;

};

export const makeVisibilityOfLights = (markers: any[], preloadedMap: Segment[], lightDistance: number) => {
  const markersWithTrianglesAndPolyons = markers.map((marker: { uid: any; x: number, y: number, triangles: [] }) => {

    const lightsource: Lightsource = new Lightsource(new Point(marker.x, marker.y), lightDistance);
    const triangles = calculateVisibility(lightsource, loadMap(preloadedMap, lightsource));

    return {
      x: marker.x,
      y: marker.y,
      triangles,
    };
  });

  return {
    markers: markersWithTrianglesAndPolyons,
    visibleMap: makeVisibleMap(preloadedMap, markersWithTrianglesAndPolyons)
  }
};

export const selector = createSelector([markersSelector, preloadedMapSelector, lightDistanceSelector], makeVisibilityOfLights);
