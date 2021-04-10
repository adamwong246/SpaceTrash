import { Point } from './point';
import { Segment } from './segment';

const leftOf = (segment: Segment, point: Point) => {
  const cross = (segment.p2.x - segment.p1.x) * (point.y - segment.p1.y)
    - (segment.p2.y - segment.p1.y) * (point.x - segment.p1.x);
  return cross < 0;
};


const interpolate = (pointA: Point, pointB: Point, f: number) => {
  const oneMinusF = 1-f;
  return new Point(
    (pointA.x * oneMinusF) + (pointB.x * f),
    (pointA.y * oneMinusF) + (pointB.y * f)
  );
};

export const segmentInFrontOf = (segmentA: Segment, segmentB: Segment, relativePoint: Point) => {
  const A1 = leftOf(segmentA, interpolate(segmentB.p1, segmentB.p2, 0.01));
  const A2 = leftOf(segmentA, interpolate(segmentB.p2, segmentB.p1, 0.01));
  const A3 = leftOf(segmentA, relativePoint);
  const B1 = leftOf(segmentB, interpolate(segmentA.p1, segmentA.p2, 0.01));
  const B2 = leftOf(segmentB, interpolate(segmentA.p2, segmentA.p1, 0.01));
  const B3 = leftOf(segmentB, relativePoint);

  if (B1 === B2 && B2 !== B3) {
    return true;
  }
  if (A1 === A2 && A2 === A3) {
    return true;
  }
  if (A1 === A2 && A2 !== A3) {
    return false;
  }
  if (B1 === B2 && B2 === B3) {
    return false;
  }

  return false;
};
