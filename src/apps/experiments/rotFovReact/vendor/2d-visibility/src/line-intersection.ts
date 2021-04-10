import { Point } from './point';

export function lineIntersection(point1: Point, point2: Point, point3: Point, point4: Point): Point {
  const s = (
    (point4.x - point3.x) * (point1.y - point3.y) -
    (point4.y - point3.y) * (point1.x - point3.x)
  ) / (
      (point4.y - point3.y) * (point2.x - point1.x) -
      (point4.x - point3.x) * (point2.y - point1.y)
    );

  const s2 = (isNaN(s) ? 0 : s);
  const x = point1.x + s2 * (point2.x - point1.x);
  const y = point1.y + s2 * (point2.y - point1.y);

  return new Point(x,y);
}
