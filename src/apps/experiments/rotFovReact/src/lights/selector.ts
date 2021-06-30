
import { createSelector } from "reselect";

import { loadMap } from '../../vendor/2d-visibility/src/load-map';
import { Point, Lightsource } from '../../vendor/2d-visibility/src/point';
import { Segment } from "../../vendor/2d-visibility/src/segment";
import { calculateVisibility } from '../../vendor/2d-visibility/src/visibility';

import makePolygon from "../makePolygon"
import PolygonBooleanLib from "../PolygonBooleanLib/index.ts";

const markersSelector = (state: { markers: any[] }) => state.markers;

const preloadedMapSelector = (state: { preloadedMap: Segment[] }) => state.preloadedMap;

export const makeVisibilityOfLights = (markers: any[], preloadedMap: Segment[]) => {
  const markersWithVis = markers.map((marker: { x: number, y: number, triangles: [] }) => {

    const triangles = calculateVisibility(new Lightsource(new Point(marker.x, marker.y), 10), loadMap(preloadedMap, {
      x: marker.x,
      y: marker.y
    }));

    return {
      x: marker.x,
      y: marker.y,
      triangles,
      polygon: makePolygon(triangles)
    };
  });

  let lightsPolygons  = markersWithVis.map((t)=> t.polygon);

  let unionPolygon;
  if(lightsPolygons.length){
    unionPolygon = lightsPolygons[0];
    for (var i = 1; i < lightsPolygons.length; i++)
      unionPolygon = PolygonBooleanLib.union(unionPolygon, lightsPolygons[i]);
  }

  return {
    markers: markersWithVis,
    union: unionPolygon && PolygonBooleanLib.segments(unionPolygon).segments
  }
};

export const selector = createSelector([markersSelector, preloadedMapSelector], makeVisibilityOfLights);
