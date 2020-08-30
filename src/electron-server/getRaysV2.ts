const { fromJS, List, Map } = require('immutable');

import {
  ABSOLLUTE,
  stripWidth,
  screenHeight,
  screenWidth
  width
} from "../raycastConsts.ts");

export const useSingleTexture = false;
export const fov = 60 * Math.PI / 180;
export const viewDist = (screenWidth / 2) / Math.tan((fov / 2));
export const twoPI = Math.PI * 2;
export const numTextures = 4;
export const numRays = Math.ceil(screenWidth / stripWidth);

export const wallTextures = [
  "walls_1.png",
  "walls_2.png",
  "walls_3.png",
  "walls_4.png"
];


const brenshams = (x0, y0, x1, y1, matrix) => {
  var dx = Math.abs(x1 - x0);
  var dy = Math.abs(y1 - y0);
  var sx = (x0 < x1) ? 1 : -1;
  var sy = (y0 < y1) ? 1 : -1;
  var err = dx - dy;

  const tiles = []

  while (true) {
    tiles.push(
      fromJS({
        x: x0, y: y0, tile: matrix.get(y0).get(x0)
      })
    )

    if ((x0 === x1) && (y0 === y1)) break;
    var e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }

  return tiles;
}

const getRays = (drone, matrix) => {
  const mapHeight = matrix.size;
  const mapWidth = matrix.get(0).size;

  console.log(new Date().toISOString(), "render...")
  const rays = new fromJS(Array.from(Array(numRays).keys()))

    .map((i, stripIdx) => {
      // where on the screen does ray go through?
      var rayScreenPos = (-numRays / 2 + i) * stripWidth;

      // the distance from the viewer to the point on the screen, simply Pythagoras.
      var rayViewDist = Math.sqrt(rayScreenPos * rayScreenPos + viewDist * viewDist);

      // the angle of the ray, relative to the viewing direction.
      // right triangle: a = sin(A) * c
      var rayAngle = Math.asin(rayScreenPos / rayViewDist);
      rayAngle = rayAngle + drone.get("direction")

      // first make sure the angle is between 0 and 360 degrees
      rayAngle %= twoPI;
      if (rayAngle < 0) rayAngle += twoPI;

      // moving right/left? up/down? Determined by which quadrant the angle is in.
      var right = (rayAngle > twoPI * 0.75 || rayAngle < twoPI * 0.25);
      var up = (rayAngle < 0 || rayAngle > Math.PI);

      var wallType = 0;

      // only do these once
      var angleSin = Math.sin(rayAngle);
      var angleCos = Math.cos(rayAngle);

      var dist = 0;	// the distance to the block we hit
      var xHit = 0; 	// the x and y coord of where the ray hit the block
      var yHit = 0;
      var xWallHit = 0;
      var yWallHit = 0;

      var textureX;	// the x-coord on the texture of the block, ie. what part of the texture are we going to render
      var wallX;	// the (x,y) map coords of the block
      var wallY;

      var wallIsShaded = false;

      var wallIsHorizontal = false;

      // first check against the vertical map/wall lines
      // we do this by moving to the right or left edge of the block we're standing in
      // and then moving in 1 map unit steps horizontally. The amount we have to move vertically
      // is determined by the slope of the ray, which is simply defined as sin(angle) / cos(angle).

      var slope = angleSin / angleCos; 	// the slope of the straight line made by the ray
      var dXVer = right ? 1 : -1; 	// we move either 1 map unit to the left or right
      var dYVer = dXVer * slope; 	// how much to move up or down

      var x = right ? Math.ceil(drone.get("x")) : Math.floor(drone.get("x"));	// starting horizontal position, at one of the edges of the current map block
      var y = drone.get("y") + (x - drone.get("x")) * slope;			// starting vertical position. We add the small horizontal step we just made, multiplied by the slope.


      while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
        const wallX = (x + (right ? 0 : -1)) >> 0;
        const wallY = (y) >> 0;

        // if (materializedMap.get(wallX, wallY).type !== 'floor') {
        if (matrix.get(wallY) && matrix.get(wallY).get(wallX) && matrix.get(wallY).get(wallX).get(0) !== 'f') {

          var distX = x - drone.get("x");
          var distY = y - drone.get("y");
          dist = distX * distX + distY * distY;	// the distance from the player to this point, squared.

          textureX = y % 1;	// where exactly are we on the wall? textureX is the x coordinate on the texture that we'll use later when texturing the wall.
          if (!right) textureX = 1 - textureX; // if we're looking to the left side of the map, the texture should be reversed

          xHit = x;	// save the coordinates of the hit. We only really use these to draw the rays on minimap.
          yHit = y;
          xWallHit = wallX;
          yWallHit = wallY;

          // make horizontal walls shaded
          wallIsShaded = true;

          wallIsHorizontal = true;

          break;
        }
        x = x + dXVer;
        y = y + dYVer;
      }

      // now check against horizontal lines. It's basically the same, just "turned around".
      // the only difference here is that once we hit a map block,
      // we check if there we also found one in the earlier, vertical run. We'll know that if dist != 0.
      // If so, we only register this hit if this distance is smaller.

      var slope = angleCos / angleSin;
      var dYHor = up ? -1 : 1;
      var dXHor = dYHor * slope;
      var y = up ? Math.floor(drone.get("y")) : Math.ceil(drone.get("y"));
      var x = drone.get("x") + (y - drone.get("y")) * slope;

      while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
        const wallY = (y + (up ? -1 : 0)) >> 0;
        const wallX = (x) >> 0;

        // if (materializedMap.get(wallX, wallY).type !== 'floor') {
        if (matrix.get(wallY).get(wallX).get(0) !== 'f') {

          var distX = x - drone.get("x");
          var distY = y - drone.get("y");
          var blockDist = distX * distX + distY * distY;
          if (!dist || blockDist < dist) {
            dist = blockDist;
            xHit = x;
            yHit = y;
            xWallHit = wallX;
            yWallHit = wallY;
            textureX = x % 1;
            if (up) textureX = 1 - textureX;

            wallIsShaded = false;
          }
          break;
        }
        x = x + dXHor;
        y = y + dYHor;
      }

      if (dist) {

        // dist = Math.sqrt(dist);
        // use perpendicular distance to adjust for fish eye
        // distorted_dist = correct_dist / cos(relative_angle_of_ray)
        // dist = dist * Math.cos(drone.get("direction") - rayAngle);

        const correctedDistance = Math.sqrt(dist) * Math.cos(drone.get("direction") - rayAngle)

        // now calc the position, height and width of the wall strip
        // "real" wall height in the game world is 1 unit, the distance from the player to the screen is viewDist,
        // thus the height on the screen is equal to wall_height_real * viewDist / dist

        var height = Math.round(viewDist / correctedDistance);

        // width is the same, but we have to stretch the texture to a factor of stripWidth to make it fill the strip correctly
        var width = height * stripWidth;

        var texX = Math.round(textureX * width);
        if (texX > width - stripWidth)
          texX = width - stripWidth;
        texX += (wallIsShaded ? width : 0);

        return fromJS({
          id: stripIdx,

          rayDistance: correctedDistance,
          x: xWallHit,
          y: yWallHit,

          style: ({
            height,
            width,
            texX,
            hit: matrix.get(yWallHit).get(xWallHit).get(0) === 'd',
          }),
          brenshams: brenshams(
            Math.round(drone.get("x")),
            Math.round(drone.get("y")),
            xWallHit, yWallHit,
            matrix
          ),
        })

      } else {
        return fromJS({
          id: stripIdx,

          rayDistance: 0,
          x: 0,
          y: 0,

          style: {
            position: ABSOLLUTE,
            src: "/walls_3.png",
            height: 0, width: 0, left: 0, top: 0, zIndex: 0, clip: ""
          },


          brenshams: new List([])
        })
      }
    })

  console.log(new Date().toISOString(), "...render")
  return rays
}

module.exports = (payloadReponse) => {

  const matrix = fromJS(payloadReponse.ship.matrix)

  const drones = fromJS(payloadReponse.drones).map((drone) => {
    return drone.set('rays', getRays(drone, matrix))
  })

  const shipMap = drones
    .reduce((memo, drone) => {
      if (drone.get("rays")) {
        return memo.concat(drone.get("rays"))
      } else {
        return memo
      }
    }, new List([]))
    .map((ray) => {
      return ray.get("brenshams")
    })
    .flatten(1)
    .reduce((memo, brensham) => {
      return {
        ...memo,
        [brensham.get("x")]: {
          ...memo[brensham.get("x")],
          [brensham.get("y")]: brensham.get("tile")
        }
      }
    }, {})

    return {
      drones,
      shipMap
    }

}
