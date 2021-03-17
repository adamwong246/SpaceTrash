
import { createSelector } from "reselect";

import { loadMap } from '../../vendor/2d-visibility/src/load-map';
import { Point, Lightsource } from '../../vendor/2d-visibility/src/point';
import { Segment } from "../../vendor/2d-visibility/src/segment";
import { calculateVisibility } from '../../vendor/2d-visibility/src/visibility';

const markersSelector = (state: { markers: any[] }) => state.markers;

const preloadedMapSelector = (state: { preloadedMap: Segment[] }) => state.preloadedMap;

export const makeVisibilityOfLights = (markers: any[], preloadedMap: Segment[]) => {
  return markers.map((marker: { x: number, y: number, triangles: [] }) => {
    return {
      x: marker.x,
      y: marker.y,
      triangles: calculateVisibility(new Lightsource(new Point(marker.x, marker.y), 10), loadMap(preloadedMap, {
        x: marker.x,
        y: marker.y
      }))
    };
  });
};


export const selector = createSelector([markersSelector, preloadedMapSelector], makeVisibilityOfLights);
