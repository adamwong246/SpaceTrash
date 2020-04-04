import getRay from "../raycast/getRay.ts";

import {stripWidth, viewDist, numRays, IStrip} from "../../lib/raycast/constantsAndTypes.ts"

export default  (
  map: any,
  player: any,
): IStrip[] => {

  return Array.from(Array(numRays).keys()).map((i) => {
    // where on the screen does ray go through?
    var rayScreenPos = (-numRays/2 + i) * stripWidth;

    // the distance from the viewer to the point on the screen, simply Pythagoras.
    var rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);

    // the angle of the ray, relative to the viewing direction.
    // right triangle: a = sin(A) * c
    var rayAngle = Math.asin(rayScreenPos / rayViewDist);

    return getRay(
      player.direction + rayAngle, 	// add the players viewing direction to get the angle in world space
      map,
      player,
      i
    );
  })
}
