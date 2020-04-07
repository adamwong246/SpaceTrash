export const ABSOLLUTE = 'absolute';

export type IPosition = 'absolute' | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-webkit-sticky" | "fixed" | "relative" | "static" | "sticky" | undefined;

export interface IStyle {
	clip: string;
	height: number;
	left: number;
	position: IPosition;
	src: string;
	top: number;
	width: number;
	zIndex: number;
};

export const emptyStyle: IStyle = {
	clip: '',
	height: 0,
	left: 0,
	position: 'absolute',
	src: '',
	top: 0,
	width: 0,
	zIndex: 0
}

interface ISprite {
	visible: boolean;
}

export interface IStrip {
	style: IStyle;
  rayDistance: number;
  id: number;
}

export const emptyStrip: IStrip = {
	style: emptyStyle,
  id: 0,
	rayDistance: 0
}

var spriteMap: any[][] = [[]];
var visibleSprites: ISprite[] = [];
var oldVisibleSprites = [];

export const screenWidth = 320;
export const screenHeight = 200;

var useSingleTexture = false;
var fov = 60 * Math.PI / 180;

export const stripWidth = 1;

export const numRays = Math.ceil(screenWidth / stripWidth);

var numTextures = 4;
var wallTextures = [
	"walls_1.png",
	"walls_2.png",
	"walls_3.png",
	"walls_4.png"
];

export const viewDist = (screenWidth/2) / Math.tan((fov / 2));
export const twoPI = Math.PI * 2;

export const moveStepSize = 0.1;
export const rotateStepSize = 0.05;
export const commandQueueWaitTime = 3
