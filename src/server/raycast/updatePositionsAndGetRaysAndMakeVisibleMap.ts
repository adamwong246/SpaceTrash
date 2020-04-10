import {
  ABSOLLUTE,
  emptyStrip,
  IPosition,
  IStrip,
  moveStepSize,
  numRays,
  rotateStepSize,
  screenHeight,
  screenWidth,
  stripWidth,
  twoPI,
  viewDist
} from "../../lib/raycast/constantsAndTypes.ts";

const brenshams = (x0, y0, x1, y1, cb) => {
   var dx = Math.abs(x1 - x0);
   var dy = Math.abs(y1 - y0);
   var sx = (x0 < x1) ? 1 : -1;
   var sy = (y0 < y1) ? 1 : -1;
   var err = dx - dy;

   while(true) {
      // setPixel(x0, y0); // Do what you need to for this
      cb(x0, y0);

      if ((x0 === x1) && (y0 === y1)) break;
      var e2 = 2*err;
      if (e2 > -dy) { err -= dy; x0  += sx; }
      if (e2 < dx) { err += dx; y0  += sy; }
   }
}

export default (drones, materializedMap) => {

  const updatedDrones = drones.map((drone) => {

    const droneWithCorrectPosition = drone.commandQueue.reduce((mm, command) => {




      // TODO refactor this
      if (command.futureAction === "DRONE_MOVE_FORWARD") {

        const roundOldX = Math.round(drone.x)
        const roundOldY = Math.round(drone.y)
        const newX = drone.x + Math.cos(drone.direction) * moveStepSize
        const newY = drone.y + Math.sin(drone.direction) * moveStepSize
        const roundNewX = Math.round(newX)
        const roundNewY = Math.round(newY)

        // check where we want to go
        if (materializedMap.get(roundNewX, roundNewY).type === 'wall') {

          // if we have moved left or right into a vertical wall
          if (roundNewX !== roundOldX) {
            // discard the x component of the move
            mm.y = newY
          }

          //  the same for Y
          if (roundNewY !== roundOldY) {
            mm.x = newX
          }

        } else {
          mm.x = newX
          mm.y = newY
        }
      }

      if (command.futureAction === "DRONE_MOVE_BACK") {

        const roundOldX = Math.round(drone.x)
        const roundOldY = Math.round(drone.y)
        const newX = drone.x + Math.cos(drone.direction) * -moveStepSize
        const newY = drone.y + Math.sin(drone.direction) * -moveStepSize
        const roundNewX = Math.round(newX)
        const roundNewY = Math.round(newY)

        // check where we want to go
        if (materializedMap.get(roundNewX, roundNewY).type === 'wall') {

          // if we have moved left or right into a vertical wall
          if (roundNewX !== roundOldX) {
            // discard the x component of the move
            mm.y = newY
          }

          //  the same for Y
          if (roundNewY !== roundOldY) {
            mm.x = newX
          }

        } else {
          mm.x = newX
          mm.y = newY
        }
      }




      if (command.futureAction === "DRONE_ROTATE_LEFT") {
        mm.direction = drone.direction - rotateStepSize
      }

      if (command.futureAction === "DRONE_ROTATE_RIGHT") {
        mm.direction = drone.direction + rotateStepSize
      }

      return mm;
    }, drone)

    return droneWithCorrectPosition

  }).map((drone) => {
    drone.rays = Array.from(Array(numRays).keys()).map((i, stripIdx) => {
      // where on the screen does ray go through?
      var rayScreenPos = (-numRays/2 + i) * stripWidth;

      // the distance from the viewer to the point on the screen, simply Pythagoras.
      var rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);

      // the angle of the ray, relative to the viewing direction.
      // right triangle: a = sin(A) * c
      var rayAngle = Math.asin(rayScreenPos / rayViewDist);
      rayAngle = rayAngle + drone.direction
      // return getRay(
      //   drone.direction + rayAngle, 	// add the players viewing direction to get the angle in world space
      //   map,
      //   drone,
      //   i
      // );

      const mapWidth = materializedMap.sizeX;
      const mapHeight = materializedMap.sizeY;

      const newStripStyle = {
        id: stripIdx,
        style: {
          position: ABSOLLUTE as IPosition,
          src: "images/walls_3.png",
          height: 0, width: 0, left: 0, top: 0, zIndex: 0, clip: ""
        },
        rayDistance: 0,
        x: 0, y: 0
      }

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

      var x: number = right ? Math.ceil(drone.x) : Math.floor(drone.x);	// starting horizontal position, at one of the edges of the current map block
      var y: number = drone.y + (x - drone.x) * slope;			// starting vertical position. We add the small horizontal step we just made, multiplied by the slope.

      while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
        const wallX: number = (x + (right ? 0 : -1))>>0;
        const wallY: number = (y)>>0;

        if (materializedMap.get(wallX, wallY).type !== 'floor') {

          var distX = x - drone.x;
          var distY = y - drone.y;
          dist = distX*distX + distY*distY;	// the distance from the player to this point, squared.

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
      var y: number = up ? Math.floor(drone.y) : Math.ceil(drone.y);
      var x: number = drone.x + (y - drone.y) * slope;

      while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
        const wallY: number = (y + (up ? -1 : 0))>>0;
        const wallX: number = (x)>>0;


        if (materializedMap.get(wallX, wallY).type !== 'floor') {

          var distX = x - drone.x;
          var distY = y - drone.y;
          var blockDist = distX*distX + distY*distY;
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

      // console.log(stripIdx, dist)
      if (dist) {

        if (materializedMap.get(xWallHit, yWallHit).type === 'door'){
          newStripStyle.style.src = "images/walls_4.png"
        }
        materializedMap.makeVisible(xWallHit, yWallHit)
        brenshams(Math.round(drone.x), Math.round(drone.y), xWallHit, yWallHit, (x, y) => materializedMap.makeVisible(x, y))

        dist = Math.sqrt(dist);



        // use perpendicular distance to adjust for fish eye
        // distorted_dist = correct_dist / cos(relative_angle_of_ray)
        dist = dist * Math.cos(drone.direction - rayAngle);

        newStripStyle.rayDistance = dist




        // now calc the position, height and width of the wall strip

        // "real" wall height in the game world is 1 unit, the distance from the player to the screen is viewDist,
        // thus the height on the screen is equal to wall_height_real * viewDist / dist

        var height = Math.round(viewDist / dist);

        // width is the same, but we have to stretch the texture to a factor of stripWidth to make it fill the strip correctly
        var width = height * stripWidth;

        // top placement is easy since everything is centered on the x-axis, so we simply move
        // it half way down the screen and then half the wall height back up.
        var top = Math.round((screenHeight - height) / 2);

        var imgTop = 0;
        var texX = Math.round(textureX*width);

        if (texX > width - stripWidth)
          texX = width - stripWidth;
        texX += (wallIsShaded ? width : 0);

        newStripStyle.style.height = height
        newStripStyle.style.width = (width*2)>>0;
        newStripStyle.style.top = top - imgTop;
        newStripStyle.style.left = stripIdx*stripWidth - texX;
        newStripStyle.style.clip = "rect(" + imgTop + "px, " + (texX + stripWidth)  + "px, " + (imgTop + height) + "px, " + texX + "px)";

        var dwx = xWallHit - drone.x;
        var dwy = yWallHit - drone.y;
        var wallDist = dwx*dwx + dwy*dwy;
        newStripStyle.style.zIndex = -(wallDist*1000)>>0;

        newStripStyle.x = xWallHit
        newStripStyle.y = yWallHit

        return newStripStyle

      } else {
        return newStripStyle
      }



    })

    return drone
  })

  return {
    visibleMap: materializedMap,
    visibleDrones: updatedDrones
  }

}
