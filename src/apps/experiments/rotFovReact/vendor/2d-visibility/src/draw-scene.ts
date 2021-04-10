import { Point } from './point';
import { Rectangle } from './rectangle';
import { Segment } from './segment';
import { EndPoint } from './end-point';

const drawRectangle = (ctx: CanvasRenderingContext2D, color: string, rectangle: Rectangle) => {
  ctx.save();
  ctx.strokeStyle = 'black';
  ctx.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  ctx.restore();
};

const drawSegment = (ctx: CanvasRenderingContext2D, color: string, segment: Segment) => {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(segment.p1.x, segment.p1.y);
  ctx.lineTo(segment.p2.x, segment.p2.y);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawVisibilityTriangles = (ctx: CanvasRenderingContext2D, color: string, lightSource: Point, visibilityOutput: Point[][]) => {
  ctx.save();
  ctx.strokeStyle = color;
  for (const points of visibilityOutput) {
    ctx.beginPath();
    ctx.moveTo(lightSource.x, lightSource.y);
    ctx.lineTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();
};

export const drawScene = (ctx: CanvasRenderingContext2D, lightSource: Point, blocks: Rectangle[], walls: Segment[], visibilityOutput: Point[][]) => {
  ctx.clearRect(-10000, -10000, 20000, 20000);
  for (const block of blocks) {
    drawRectangle(ctx, 'blue', block);
  }
  // for (const wall of walls) {
  //   drawSegment(ctx, 'red', wall);
  // }
  drawVisibilityTriangles(ctx, 'black', lightSource, visibilityOutput);
};
