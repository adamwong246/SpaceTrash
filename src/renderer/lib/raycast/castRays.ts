import castSingleRay from "./castSingleRay.ts";
import {stripWidth, viewDist, numRays} from "./constantsAndTypes.ts"

import {IStrip} from "./constantsAndTypes.ts"

export default (
  mapWidth: number,
  mapHeight: number,
  map: any,
  player: any,
  screenStrips: IStrip[]
): IStrip[] => {
  console.log('castRays');
  var stripIdx = 0;
  return Array.from(Array(numRays).keys()).map((i) => {
    // where on the screen does ray go through?
    var rayScreenPos = (-numRays/2 + i) * stripWidth;

    // the distance from the viewer to the point on the screen, simply Pythagoras.
    var rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);

    // the angle of the ray, relative to the viewing direction.
    // right triangle: a = sin(A) * c
    var rayAngle = Math.asin(rayScreenPos / rayViewDist);

    return castSingleRay(
      player.direction + rayAngle, 	// add the players viewing direction to get the angle in world space
      stripIdx++,
      mapWidth, mapHeight, map,
      player,
      screenStrips
    );
  }).filter((x) => x)
}
