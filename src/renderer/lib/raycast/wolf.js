
// just a few helper functions
var $ = function(id) { return document.getElementById(id); };
var dc = function(tag) { return document.createElement(tag); };

// indexOf for IE. From: https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference:Objects:Array:indexOf
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(elt /*, from*/) {
		var len = this.length;
		var from = Number(arguments[1]) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0)
			from += len;
		for (; from < len; from++) {
			if (from in this && this[from] === elt)
				return from;
		}
		return -1;
	};
}


var map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 	// 0
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 1
	[1, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 2
	[1, 0, 0, 3, 0, 3, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 3
	[1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 4
	[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 5
	[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1], 	// 6
	[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 7
	[1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], 	// 8
	[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 9
	[1, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1], 	// 10
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 11
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], 	// 12
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 13
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1], 	// 14
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 15
	[1, 0, 0, 4, 0, 0, 4, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1], 	// 16
	[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1], 	// 17
	[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1], 	// 18
	[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1], 	// 19
	[1, 0, 0, 4, 3, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 1], 	// 20
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 21
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 	// 22
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]	// 23
];
//	 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31

var itemTypes = [
	{ img : "sprites/tablechairs.png", block : true },	// 0
	{ img : "sprites/armor.png", block : true },		// 1
	{ img : "sprites/plantgreen.png", block : true },	// 2
	{ img : "sprites/lamp.png", block : false }		// 3
];

var mapItems = [

	// lamps in center area
	{type:3, x:10, y:7},
	{type:3, x:15, y:7},

	// lamps in bottom corridor
	{type:3, x:5, y:22},
	{type:3, x:12, y:22},
	{type:3, x:19, y:22},

	// tables in long bottom room
	{type:0, x:10, y:18},
	{type:0, x:15, y:18},
	// lamps in long bottom room
	{type:3, x:8, y:18},
	{type:3, x:17, y:18}
];


var enemyTypes = [
	{ img : "guard.png", moveSpeed : 0.05, rotSpeed : 3, totalStates : 13 }
];

var mapEnemies = [
	{type : 0, x : 17.5, y : 4.5},
	{type : 0, x : 25.5, y : 16.5}
];

var player = {
	x : 10.5,		// current x, y position
	y : 6.5,
	dir : 0,		// the direction that the player is turning, either -1 for left or 1 for right.
	rotDeg : 0,		// the current angle of rotation
	rot : 0,		// rotation in radians
	speed : 0,		// is the playing moving forward (speed = 1) or backwards (speed = -1).
	moveSpeed : 0.10,	// how far (in map units) does the player move each step/update
	rotSpeed : 3		// how much does the player rotate each step/update (in degrees)
}

var mapWidth = 0;
var mapHeight = 0;

var miniMapScale = 8;

var screenWidth = 320;
var screenHeight = 200;

var showOverlay = true;

var stripWidth = 3;
var fov = 60 * Math.PI / 180;

var numRays = Math.ceil(screenWidth / stripWidth);
var fovHalf = fov / 2;

var viewDist = (screenWidth/2) / Math.tan((fov / 2));

var twoPI = Math.PI * 2;

var numTextures = 4;
var wallTextures = [
	"walls_1.png",
	"walls_2.png",
	"walls_3.png",
	"walls_4.png"
];

var userAgent = navigator.userAgent.toLowerCase();
var isGecko = userAgent.indexOf("gecko") != -1 && userAgent.indexOf("safari") == -1;

// enable this to use a single image file containing all wall textures. This performs better in Firefox. Opera likes smaller images.
var useSingleTexture = isGecko;


var screenStrips = [];
var overlay;

var fps = 0;
var overlayText = "";

function init() {

	mapWidth = map[0].length;
	mapHeight = map.length;

	bindKeys();

	initScreen();
  // 
	// initSprites();
  //
	// initEnemies();
  //
	// drawMiniMap();
  //
	// gameCycle();
	// renderCycle();
}

var enemies = [];

function initEnemies() {
	var screen = $("screen");

	for (var i=0;i<mapEnemies.length;i++) {
		var enemy = mapEnemies[i];
		var type = enemyTypes[enemy.type];
		var img = dc("img");
		img.src = type.img;
		img.style.display = "none";
		img.style.position = "absolute";

		enemy.state = 0;
		enemy.rot = 0;
		enemy.rotDeg = 0;
		enemy.dir = 0;
		enemy.speed = 0;
		enemy.moveSpeed = type.moveSpeed;
		enemy.rotSpeed = type.rotSpeed;
		enemy.totalStates = type.totalStates;

		enemy.oldStyles = {
			left : 0,
			top : 0,
			width : 0,
			height : 0,
			clip : "",
			display : "none",
			zIndex : 0
		};

		enemy.img = img;
		enemies.push(enemy);

		screen.appendChild(img);
	}
}


var spriteMap;
var visibleSprites = [];
var oldVisibleSprites = [];

function initSprites() {
	spriteMap = [];
	for (var y=0;y<map.length;y++) {
		spriteMap[y] = [];
	}

	var screen = $("screen");

	for (var i=0;i<mapItems.length;i++) {
		var sprite = mapItems[i];
		var itemType = itemTypes[sprite.type];
		var img = dc("img");
		img.src = itemType.img;
		img.style.display = "none";
		img.style.position = "absolute";

		sprite.visible = false;
		sprite.block = itemType.block;
		sprite.img = img;

		spriteMap[sprite.y][sprite.x] = sprite;
		screen.appendChild(img);
	}

}


var lastGameCycleTime = 0;
var gameCycleDelay = 1000 / 30; // aim for 30 fps for game logic

function gameCycle() {
	var now = new Date().getTime();

	// time since last game logic
	var timeDelta = now - lastGameCycleTime;

	move(player, timeDelta);

	ai(timeDelta);

	var cycleDelay = gameCycleDelay;

	// the timer will likely not run that fast due to the rendering cycle hogging the cpu
	// so figure out how much time was lost since last cycle

	if (timeDelta > cycleDelay) {
		cycleDelay = Math.max(1, cycleDelay - (timeDelta - cycleDelay))
	}

	setTimeout(gameCycle, cycleDelay);

	lastGameCycleTime = now;
}

function ai(timeDelta) {
	for (var i=0;i<enemies.length;i++) {
		var enemy = enemies[i];

		var dx = player.x - enemy.x;
		var dy = player.y - enemy.y;

		var dist = Math.sqrt(dx*dx + dy*dy);
		if (dist > 4) {
			var angle = Math.atan2(dy, dx);

			enemy.rotDeg = angle * 180 / Math.PI;
			enemy.rot = angle;
			enemy.speed = 1;

			var walkCycleTime = 1000;
			var numWalkSprites = 4;

			enemy.state = Math.floor((new Date() % walkCycleTime) / (walkCycleTime / numWalkSprites)) + 1;

		} else {
			enemy.state = 0;
			enemy.speed = 0;
		}

		move(enemies[i], timeDelta);
	}
}

var lastRenderCycleTime = 0;

function renderCycle() {

	updateMiniMap();

	clearSprites();

	castRays();

	renderSprites();

	renderEnemies();

	// time since last rendering
	var now = new Date().getTime();
	var timeDelta = now - lastRenderCycleTime;
	var cycleDelay = 1000 / 30;
	if (timeDelta > cycleDelay) {
		cycleDelay = Math.max(1, cycleDelay - (timeDelta - cycleDelay))
	}
	lastRenderCycleTime = now;
	setTimeout(renderCycle, cycleDelay);

	fps = 1000 / timeDelta;
	if (showOverlay) {
		updateOverlay();
	}
}
function clearSprites() {
	// clear the visible sprites array but keep a copy in oldVisibleSprites for later.
	// also mark all the sprites as not visible so they can be added to visibleSprites again during raycasting.
	oldVisibleSprites = [];
	for (var i=0;i<visibleSprites.length;i++) {
		var sprite = visibleSprites[i];
		oldVisibleSprites[i] = sprite;
		sprite.visible = false;
	}
	visibleSprites = [];
}

function renderSprites() {

	for (var i=0;i<visibleSprites.length;i++) {
		var sprite = visibleSprites[i];
		var img = sprite.img;
		img.style.display = "block";

		// translate position to viewer space
		var dx = sprite.x + 0.5 - player.x;
		var dy = sprite.y + 0.5 - player.y;

		// distance to sprite
		var dist = Math.sqrt(dx*dx + dy*dy);

		// sprite angle relative to viewing angle
		var spriteAngle = Math.atan2(dy, dx) - player.rot;

		// size of the sprite
		var size = viewDist / (Math.cos(spriteAngle) * dist);

		if (size <= 0) continue;

		// x-position on screen
		var x = Math.tan(spriteAngle) * viewDist;

		img.style.left = (screenWidth/2 + x - size/2) + "px";

		// y is constant since we keep all sprites at the same height and vertical position
		img.style.top = ((screenHeight-size)/2)+"px";

		img.style.width = size + "px";
		img.style.height =  size + "px";

		var dbx = sprite.x - player.x;
		var dby = sprite.y - player.y;
		var blockDist = dbx*dbx + dby*dby;
		img.style.zIndex = -Math.floor(blockDist*1000);
	}

	// hide the sprites that are no longer visible
	for (var i=0;i<oldVisibleSprites.length;i++) {
		var sprite = oldVisibleSprites[i];
		if (visibleSprites.indexOf(sprite) < 0) {
			sprite.visible = false;
			sprite.img.style.display = "none";
		}
	}

}
function renderEnemies() {

	for (var i=0;i<enemies.length;i++) {
		var enemy = enemies[i];
		var img = enemy.img;

		var dx = enemy.x - player.x;
		var dy = enemy.y - player.y;

		var angle = Math.atan2(dy, dx) - player.rot;

		if (angle < -Math.PI) angle += 2*Math.PI;
		if (angle >= Math.PI) angle -= 2*Math.PI;

		// is enemy in front of player? Maybe use the FOV value instead.
		if (angle > -Math.PI*0.5 && angle < Math.PI*0.5) {
			var distSquared = dx*dx + dy*dy;
			var dist = Math.sqrt(distSquared);
			var size = viewDist / (Math.cos(angle) * dist);

			if (size <= 0) continue;

			var x = Math.tan(angle) * viewDist;

			var style = img.style;
			var oldStyles = enemy.oldStyles;

			// height is equal to the sprite size
			if (size != oldStyles.height) {
				style.height =  size + "px";
				oldStyles.height = size;
			}

			// width is equal to the sprite size times the total number of states
			var styleWidth = size * enemy.totalStates;
			if (styleWidth != oldStyles.width) {
				style.width = styleWidth + "px";
				oldStyles.width = styleWidth;
			}

			// top position is halfway down the screen, minus half the sprite height
			var styleTop = ((screenHeight-size)/2);
			if (styleTop != oldStyles.top) {
				style.top = styleTop + "px";
				oldStyles.top = styleTop;
			}

			// place at x position, adjusted for sprite size and the current sprite state
			var styleLeft = (screenWidth/2 + x - size/2 - size*enemy.state);
			if (styleLeft != oldStyles.left) {
				style.left = styleLeft + "px";
				oldStyles.left = styleLeft;
			}

			var styleZIndex = -(distSquared*1000)>>0;
			if (styleZIndex != oldStyles.zIndex) {
				style.zIndex = styleZIndex;
				oldStyles.zIndex = styleZIndex;
			}

			var styleDisplay = "block";
			if (styleDisplay != oldStyles.display) {
				style.display = styleDisplay;
				oldStyles.display = styleDisplay;
			}

			var styleClip = "rect(0, " + (size*(enemy.state+1)) + ", " + size + ", " + (size*(enemy.state)) + ")";
			if (styleClip != oldStyles.clip) {
				style.clip = styleClip;
				oldStyles.clip = styleClip;
			}
		} else {
			var styleDisplay = "none";
			if (styleDisplay != enemy.oldStyles.display) {
				img.style.display = styleDisplay;
				enemy.oldStyles.display = styleDisplay;
			}
		}
	}
}

function updateOverlay() {
	overlay.innerHTML = "FPS: " + fps.toFixed(1) + "<br/>" + overlayText;
	overlayText = "";
}


function initScreen() {

	var screen = $("screen");

	for (var i=0;i<screenWidth;i+=stripWidth) {
		var strip = dc("img");
		strip.style.position = "absolute";
		strip.style.height = "0px";
		strip.style.left = strip.style.top = "0px";

		if (useSingleTexture) {
			strip.src = (window.opera ? "walls_19color.png" : "walls.png");
		}

		strip.oldStyles = {
			left : 0,
			top : 0,
			width : 0,
			height : 0,
			clip : "",
			src : ""
		};

		screenStrips.push(strip);
		screen.appendChild(strip);
	}

	// overlay div for adding text like fps count, etc.
	overlay = dc("div");
	overlay.id = "overlay";
	overlay.style.display = showOverlay ? "block" : "none";
	screen.appendChild(overlay);

}

// bind keyboard events to game functions (movement, etc)
function bindKeys() {

	document.onkeydown = function(e) {
		e = e || window.event;

		switch (e.keyCode) { // which key was pressed?

			case 38: // up, move player forward, ie. increase speed
				player.speed = 1;
				break;

			case 40: // down, move player backward, set negative speed
				player.speed = -1;
				break;

			case 37: // left, rotate player left
				player.dir = -1;
				break;

			case 39: // right, rotate player right
				player.dir = 1;
				break;
		}
	}

	document.onkeyup = function(e) {
		e = e || window.event;

		switch (e.keyCode) {
			case 38:
			case 40:
				player.speed = 0;	// stop the player movement when up/down key is released
				break;
			case 37:
			case 39:
				player.dir = 0;
				break;
		}
	}
}


function castRays() {
	var stripIdx = 0;

	for (var i=0;i<numRays;i++) {
		// where on the screen does ray go through?
		var rayScreenPos = (-numRays/2 + i) * stripWidth;

		// the distance from the viewer to the point on the screen, simply Pythagoras.
		var rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);

		// the angle of the ray, relative to the viewing direction.
		// right triangle: a = sin(A) * c
		var rayAngle = Math.asin(rayScreenPos / rayViewDist);

		castSingleRay(
			player.rot + rayAngle, 	// add the players viewing direction to get the angle in world space
			stripIdx++
		);
	}
}

function castSingleRay(rayAngle, stripIdx) {

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
		var wallX = (x + (right ? 0 : -1))>>0;
		var wallY = (y)>>0;

		if (spriteMap[wallY][wallX] && !spriteMap[wallY][wallX].visible) {
			spriteMap[wallY][wallX].visible = true;
			visibleSprites.push(spriteMap[wallY][wallX]);
		}

		// is this point inside a wall block?
		if (map[wallY][wallX] > 0) {

			var distX = x - player.x;
			var distY = y - player.y;
			dist = distX*distX + distY*distY;	// the distance from the player to this point, squared.

			wallType = map[wallY][wallX]; // we'll remember the type of wall we hit for later
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
		var wallY = (y + (up ? -1 : 0))>>0;
		var wallX = (x)>>0;

		if (spriteMap[wallY][wallX] && !spriteMap[wallY][wallX].visible) {
			spriteMap[wallY][wallX].visible = true;
			visibleSprites.push(spriteMap[wallY][wallX]);
		}

		if (map[wallY][wallX] > 0) {
			var distX = x - player.x;
			var distY = y - player.y;
			var blockDist = distX*distX + distY*distY;
			if (!dist || blockDist < dist) {
				dist = blockDist;
				xHit = x;
				yHit = y;
				xWallHit = wallX;
				yWallHit = wallY;

				wallType = map[wallY][wallX];
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
		//drawRay(xHit, yHit);

		var strip = screenStrips[stripIdx];

		dist = Math.sqrt(dist);

		// use perpendicular distance to adjust for fish eye
		// distorted_dist = correct_dist / cos(relative_angle_of_ray)
		dist = dist * Math.cos(player.rot - rayAngle);

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

		var style = strip.style;
		var oldStyles = strip.oldStyles;

		var styleHeight;
		if (useSingleTexture) {
			// then adjust the top placement according to which wall texture we need
			imgTop = (height * (wallType-1))>>0;
			var styleHeight = (height * numTextures)>>0;
		} else {
			var styleSrc = wallTextures[wallType-1];
			if (oldStyles.src != styleSrc) {
				strip.src = styleSrc;
				oldStyles.src = styleSrc
			}
			var styleHeight = height;
		}

		if (oldStyles.height != styleHeight) {
			style.height = styleHeight + "px";
			oldStyles.height = styleHeight
		}

		var texX = Math.round(textureX*width);
		if (texX > width - stripWidth)
			texX = width - stripWidth;
		texX += (wallIsShaded ? width : 0);

		var styleWidth = (width*2)>>0;
		if (oldStyles.width != styleWidth) {
			style.width = styleWidth +"px";
			oldStyles.width = styleWidth;
		}

		var styleTop = top - imgTop;
		if (oldStyles.top != styleTop) {
			style.top = styleTop + "px";
			oldStyles.top = styleTop;
		}

		var styleLeft = stripIdx*stripWidth - texX;
		if (oldStyles.left != styleLeft) {
			style.left = styleLeft + "px";
			oldStyles.left = styleLeft;
		}

		var styleClip = "rect(" + imgTop + ", " + (texX + stripWidth)  + ", " + (imgTop + height) + ", " + texX + ")";
		if (oldStyles.clip != styleClip) {
			style.clip = styleClip;
			oldStyles.clip = styleClip;
		}

		var dwx = xWallHit - player.x;
		var dwy = yWallHit - player.y;
		var wallDist = dwx*dwx + dwy*dwy;
		var styleZIndex = -(wallDist*1000)>>0;
		if (styleZIndex != oldStyles.zIndex) {
			strip.style.zIndex = styleZIndex;
			oldStyles.zIndex = styleZIndex;
		}

	}

}

function drawRay(rayX, rayY) {
	var miniMapObjects = $("minimapobjects");
	var objectCtx = miniMapObjects.getContext("2d");

	objectCtx.strokeStyle = "rgba(0,100,0,0.3)";
	objectCtx.lineWidth = 0.5;
	objectCtx.beginPath();
	objectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);
	objectCtx.lineTo(
		rayX * miniMapScale,
		rayY * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
}

function move(entity, timeDelta) {
	// time timeDelta has passed since we moved last time. We should have moved after time gameCycleDelay,
	// so calculate how much we should multiply our movement to ensure game speed is constant

	var mul = timeDelta / gameCycleDelay;

	var moveStep = mul * entity.speed * entity.moveSpeed;	// entity will move this far along the current direction vector

	entity.rotDeg += mul * entity.dir * entity.rotSpeed; // add rotation if entity is rotating (entity.dir != 0)
	entity.rotDeg %= 360;

	if (entity.rotDeg < -180) entity.rotDeg += 360;
	if (entity.rotDeg >= 180) entity.rotDeg -= 360;

	var snap = (entity.rotDeg+360) % 90
	if (snap < 2 || snap > 88) {
		entity.rotDeg = Math.round(entity.rotDeg / 90) * 90;
	}

	entity.rot = entity.rotDeg * Math.PI / 180;

	var newX = entity.x + Math.cos(entity.rot) * moveStep;	// calculate new entity position with simple trigonometry
	var newY = entity.y + Math.sin(entity.rot) * moveStep;

	var pos = checkCollision(entity.x, entity.y, newX, newY, 0.35);

	entity.x = pos.x; // set new position
	entity.y = pos.y;
}

function checkCollision(fromX, fromY, toX, toY, radius) {
	var pos = {
		x : fromX,
		y : fromY
	};

	if (toY < 0 || toY >= mapHeight || toX < 0 || toX >= mapWidth)
		return pos;

	var blockX = Math.floor(toX);
	var blockY = Math.floor(toY);


	if (isBlocking(blockX,blockY)) {
		return pos;
	}

	pos.x = toX;
	pos.y = toY;

	var blockTop = isBlocking(blockX,blockY-1);
	var blockBottom = isBlocking(blockX,blockY+1);
	var blockLeft = isBlocking(blockX-1,blockY);
	var blockRight = isBlocking(blockX+1,blockY);

	if (blockTop != 0 && toY - blockY < radius) {
		toY = pos.y = blockY + radius;
	}
	if (blockBottom != 0 && blockY+1 - toY < radius) {
		toY = pos.y = blockY + 1 - radius;
	}
	if (blockLeft != 0 && toX - blockX < radius) {
		toX = pos.x = blockX + radius;
	}
	if (blockRight != 0 && blockX+1 - toX < radius) {
		toX = pos.x = blockX + 1 - radius;
	}

	// is tile to the top-left a wall
	if (isBlocking(blockX-1,blockY-1) != 0 && !(blockTop != 0 && blockLeft != 0)) {
		var dx = toX - blockX;
		var dy = toY - blockY;
		if (dx*dx+dy*dy < radius*radius) {
			if (dx*dx > dy*dy)
				toX = pos.x = blockX + radius;
			else
				toY = pos.y = blockY + radius;
		}
	}
	// is tile to the top-right a wall
	if (isBlocking(blockX+1,blockY-1) != 0 && !(blockTop != 0 && blockRight != 0)) {
		var dx = toX - (blockX+1);
		var dy = toY - blockY;
		if (dx*dx+dy*dy < radius*radius) {
			if (dx*dx > dy*dy)
				toX = pos.x = blockX + 1 - radius;
			else
				toY = pos.y = blockY + radius;
		}
	}
	// is tile to the bottom-left a wall
	if (isBlocking(blockX-1,blockY+1) != 0 && !(blockBottom != 0 && blockBottom != 0)) {
		var dx = toX - blockX;
		var dy = toY - (blockY+1);
		if (dx*dx+dy*dy < radius*radius) {
			if (dx*dx > dy*dy)
				toX = pos.x = blockX + radius;
			else
				toY = pos.y = blockY + 1 - radius;
		}
	}
	// is tile to the bottom-right a wall
	if (isBlocking(blockX+1,blockY+1) != 0 && !(blockBottom != 0 && blockRight != 0)) {
		var dx = toX - (blockX+1);
		var dy = toY - (blockY+1);
		if (dx*dx+dy*dy < radius*radius) {
			if (dx*dx > dy*dy)
				toX = pos.x = blockX + 1 - radius;
			else
				toY = pos.y = blockY + 1 - radius;
		}
	}

	return pos;
}

function isBlocking(x,y) {

	// first make sure that we cannot move outside the boundaries of the level
	if (y < 0 || y >= mapHeight || x < 0 || x >= mapWidth)
		return true;

	var ix = Math.floor(x);
	var iy = Math.floor(y);

	// return true if the map block is not 0, ie. if there is a blocking wall.
	if (map[iy][ix] != 0)
		return true;

	if (spriteMap[iy][ix] && spriteMap[iy][ix].block)
		return true;

	return false;
}

function updateMiniMap() {

	var miniMap = $("minimap");
	var miniMapObjects = $("minimapobjects");

	var objectCtx = miniMapObjects.getContext("2d");
	miniMapObjects.width = miniMapObjects.width;

	objectCtx.fillStyle = "red";
	objectCtx.fillRect(		// draw a dot at the current player position
		player.x * miniMapScale - 2,
		player.y * miniMapScale - 2,
		4, 4
	);

	objectCtx.strokeStyle = "red";
	objectCtx.beginPath();
	objectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);
	objectCtx.lineTo(
		(player.x + Math.cos(player.rot) * 4) * miniMapScale,
		(player.y + Math.sin(player.rot) * 4) * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();

	for (var i=0;i<enemies.length;i++) {
		var enemy = enemies[i];

		objectCtx.fillStyle = "blue";
		objectCtx.fillRect(		// draw a dot at the enemy position
			enemy.x * miniMapScale - 2,
			enemy.y * miniMapScale - 2,
			4, 4
		);
	}
}

function drawMiniMap() {

	// draw the topdown view minimap

	var miniMap = $("minimap");			// the actual map
	var miniMapCtr = $("minimapcontainer");		// the container div element
	var miniMapObjects = $("minimapobjects");	// the canvas used for drawing the objects on the map (player character, etc)

	miniMap.width = mapWidth * miniMapScale;	// resize the internal canvas dimensions
	miniMap.height = mapHeight * miniMapScale;	// of both the map canvas and the object canvas
	miniMapObjects.width = miniMap.width;
	miniMapObjects.height = miniMap.height;

	var w = (mapWidth * miniMapScale) + "px" 	// minimap CSS dimensions
	var h = (mapHeight * miniMapScale) + "px"
	miniMap.style.width = miniMapObjects.style.width = miniMapCtr.style.width = w;
	miniMap.style.height = miniMapObjects.style.height = miniMapCtr.style.height = h;

	var ctx = miniMap.getContext("2d");

	ctx.fillStyle = "white";
	ctx.fillRect(0,0,miniMap.width,miniMap.height);

	// loop through all blocks on the map
	for (var y=0;y<mapHeight;y++) {
		for (var x=0;x<mapWidth;x++) {

			var wall = map[y][x];

			if (wall > 0) { // if there is a wall block at this (x,y) ...
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(				// ... then draw a block on the minimap
					x * miniMapScale,
					y * miniMapScale,
					miniMapScale,miniMapScale
				);
			}

			if (spriteMap[y][x]) {
				ctx.fillStyle = "rgb(100,200,100)";
				ctx.fillRect(
					x * miniMapScale + miniMapScale*0.25,
					y * miniMapScale + miniMapScale*0.25,
					miniMapScale*0.5,miniMapScale*0.5
				);
			}
		}
	}

	updateMiniMap();
}

setTimeout(init, 1);
