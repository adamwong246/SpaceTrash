import {ABSOLLUTE, IPosition, IStrip, emptyStrip, stripWidth, screenHeight, twoPI, screenWidth} from "../../lib/raycast/constantsAndTypes.ts"

var numRays = Math.ceil(screenWidth / stripWidth);
var fov = 60 * Math.PI / 180;
var viewDist = (screenWidth/2) / Math.tan((fov / 2));

export default  (
  rayAngle,
  map,
  player: {direction: number, x: number, y: number },
  stripIdx
): IStrip => {

  const mapWidth = map.sizeX;
  const mapHeight = map.sizeY;


  const newStripStyle = {
    id: stripIdx,
    style: {
      position: ABSOLLUTE as IPosition,
      src: "images/walls_3.png",
      height: 0, width: 0, left: 0, top: 0, zIndex: 0, clip: ""
    }
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

  var x = right ? Math.ceil(player.x) : Math.floor(player.x);	// starting horizontal position, at one of the edges of the current map block
  var y = player.y + (x - player.x) * slope;			// starting vertical position. We add the small horizontal step we just made, multiplied by the slope.

  while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
    const wallX: number = (x + (right ? 0 : -1))>>0;
    const wallY: number = (y)>>0;

    if (map.get(wallX, wallY).type === 'wall') {

      var distX = x - player.x;
      var distY = y - player.y;
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
  var y = up ? Math.floor(player.y) : Math.ceil(player.y);
  var x = player.x + (y - player.y) * slope;

  while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
    const wallY: number = (y + (up ? -1 : 0))>>0;
    const wallX: number = (x)>>0;

    if (map.get(wallX, wallY).type === 'wall') {
      var distX = x - player.x;
      var distY = y - player.y;
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

  if (dist) {
    dist = Math.sqrt(dist);

    // use perpendicular distance to adjust for fish eye
    // distorted_dist = correct_dist / cos(relative_angle_of_ray)
    dist = dist * Math.cos(player.direction - rayAngle);

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

    var dwx = xWallHit - player.x;
    var dwy = yWallHit - player.y;
    var wallDist = dwx*dwx + dwy*dwy;
    newStripStyle.style.zIndex = -(wallDist*1000)>>0;

    return newStripStyle

  } else {
    return newStripStyle
  }
};
