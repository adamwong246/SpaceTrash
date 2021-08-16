import { lineIntersection } from './line-intersection';
import { endpointCompare } from './endpoint-compare';
import { segmentInFrontOf } from './segment-in-front-of';
import { Lightsource, Point, VizTriangle } from './point';
import { EndPoint } from './end-point';
import { Segment } from './segment';

const siner = (a: number) => {
  // console.log(Math.sin(a), a)
  return Math.sin(a)
}

const cosiner = (a: number) => {
  // console.log(Math.cos(a), a)
  return Math.cos(a)
}

function getTrianglePoints(origin: Point, angle1: number, angle2: number, segment: Segment): VizTriangle {

  // console.log(angle1, angle2);

  const angle1Cos = cosiner(angle1);
  const angle1Sin = siner(angle1);
  const angle2Cos = cosiner(angle2);
  const angle2Sin = siner(angle2);

  const p1 = origin;
  const p2 = new Point(origin.x + angle1Cos, origin.y + angle1Sin);
  const p3 = new Point(0, 0);
  const p4 = new Point(0, 0);

  if (segment) {
    p3.x = segment.p1.x;
    p3.y = segment.p1.y;
    p4.x = segment.p2.x;
    p4.y = segment.p2.y;
  } else {
    p3.x = origin.x + angle1Cos * 200;
    p3.y = origin.y + angle1Sin * 200;
    p4.x = origin.x + angle2Cos * 200;
    p4.y = origin.y + angle2Sin * 200;
  }

  // console.log(p1, p2, p3, p  4);
  const pBegin = lineIntersection(p3, p4, p1, p2);

  p2.x = origin.x + angle2Cos;
  p2.y = origin.y + angle2Sin;

  const pEnd = lineIntersection(p3, p4, p1, p2);

  if (segment) {
    return {
      first: pBegin, second: pEnd,
      uid: segment.uid,
      wall: segment.wall
    }
  }
  else {
    return {
      first: pBegin, second: pEnd,
      uid: 'idk',
      wall: { x: 0, y: 0, wallType: "idk" }
    }
  }

}

export function calculateVisibility(lightSource: Lightsource, endpoints: EndPoint[]): VizTriangle[] {
  const origin = lightSource.position;
  const openSegments = [];
  const output = [];
  let beginAngle = 0;

  endpoints.sort(endpointCompare);
  // console.log(endpoints[0]);

  for (let pass = 0; pass < 2; pass += 1) {
    for (const endpoint of endpoints) {
      const openSegment = openSegments[0];

      if (endpoint.beginsSegment) {
        let index = 0;
        let segment = openSegments[index];
        while (segment && segmentInFrontOf(endpoint.segment, segment, origin)) {
          index += 1;
          segment = openSegments[index];
        }

        if (!segment) {
          openSegments.push(endpoint.segment);
        } else {
          openSegments.splice(index, 0, endpoint.segment);
        }
      } else {
        const index = openSegments.indexOf(endpoint.segment);
        if (index > -1) { openSegments.splice(index, 1); }
      }

      if (openSegment !== openSegments[0]) {
        if (pass === 1) {

          // console.log(openSegment.d, lightSource.range)

          // if(openSegment && openSegment.d < lightSource.range){
          //   const trianglePoints = getTrianglePoints(origin, beginAngle, endpoint.angle, openSegment);
          //   output.push(trianglePoints);
          // } 

          const trianglePoints = getTrianglePoints(origin, beginAngle, endpoint.angle, openSegment);
          output.push(trianglePoints);
          
        }
        beginAngle = endpoint.angle;
      }
    }
  }

  return output;
}
