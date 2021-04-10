import { EndPoint } from './end-point';

export function endpointCompare(pointA: EndPoint, pointB: EndPoint) {
  if (pointA.angle > pointB.angle) {
    return 1;
  }
  if (pointA.angle < pointB.angle) {
    return -1;
  }
  if (!pointA.beginsSegment && pointB.beginsSegment) {
    return 1;
  }
  if (pointA.beginsSegment && !pointB.beginsSegment) {
    return -1;
  }
  return 0;
}
