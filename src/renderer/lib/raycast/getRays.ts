import castRays from "./castRays.ts";

import {emptyStrip, screenWidth, stripWidth, IStrip} from "./constantsAndTypes.ts"

export const getRays = (map, drone) => {
  const screenStrips: IStrip[] = [];
  for (var i=0;i<screenWidth;i+=stripWidth) {
    var strip = emptyStrip
    strip.style.position = "absolute";
    strip.style.height = 0;//"0px";
    strip.style.left = strip.style.top = 0;//"0px";
    strip.style.src = "walls.png";
    screenStrips.push(strip);
  }
  const rays = castRays(map.sizeX, map.sizeY, map, drone, screenStrips)

  return rays
};
