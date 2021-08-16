import { Segment } from './segment';
import { Rectangle } from './rectangle';
import { Lightsource, Point, Wall } from './point';
import { EndPoint } from './end-point';

const calculateEndPointAngles = (lightSource: Lightsource, segment: Segment) => {
  const { x, y } = lightSource.position;
  const dx = 0.5 * (segment.p1.x + segment.p2.x) - x;
  const dy = 0.5 * (segment.p1.y + segment.p2.y) - y;

  segment.d = (dx * dx) + (dy * dy);
  segment.p1.angle = Math.atan2(segment.p1.y - y, segment.p1.x - x);
  segment.p2.angle = Math.atan2(segment.p2.y - y, segment.p2.x - x);
};

const twoPi = Math.PI * 2;

const setSegmentBeginning = (segment: Segment) => {
  let dAngle = segment.p2.angle - segment.p1.angle;

  if (dAngle <= -Math.PI) {
    dAngle += twoPi;
  }
  if (dAngle > Math.PI) {
    dAngle -= twoPi;
  }

  segment.p1.beginsSegment = dAngle > 0;
  segment.p2.beginsSegment = !segment.p1.beginsSegment;
};

const processSegments = (lightSource: Lightsource, segments: Segment[]) => {
  for (const segment of segments) {
    calculateEndPointAngles(lightSource, segment);
    setSegmentBeginning(segment);
  }

  return segments;
};


const distance = (a: Point, b: Point): number => {
  var da = a.x - b.x;
  var db = a.y - b.y;

  var dc = Math.sqrt(da * da + db * db);
  return dc;
};

export function preLoadMap(room: Rectangle, blocks: Rectangle[], wallsAsPolygon: any): Segment[] {

  const walls = wallsAsPolygon.regions.reduce((memo: any[], region: any) => {
    return memo.concat(

      region.map((xAndY: any[], ndx: number, rry: any[]) => {

        // return new Segment(xAndY[0], xAndY[1], rry[ndx-1][0], rry[ndx-1][1], {x: 0, y: 0, wallType: "qweqwe"})

        if(ndx > 0){
          return new Segment(xAndY[0], xAndY[1], rry[ndx-1][0], rry[ndx-1][1], {x: 0, y: 0, wallType: "idk"})
        } else {
          // return -99
        }
        
      }).concat(
        new Segment(region[0][0], region[0][1], region[region.length-1][0], region[region.length-1][1], {x: 99, y: 98, wallType: "idk"})
      )


    )
  }, []).filter((s: any) => s);
  const segments: Segment[] = [];
  for (const segment of room.getCornerSegments()) {
    segments.push(segment);
  }
  for (const block of blocks) {
    for (const segment of block.getCornerSegments()) {
      segments.push(segment);
    }
  }
  for (const segment of walls) {
    segments.push(segment);
  }
  // console.log(segments)
  // console.log(segments.filter((s: Segment) => distance(s.p1, s.p2) >  Number.EPSILON))
  // return segments;
  return segments.filter((s: Segment) => distance(s.p1, s.p2) >  Number.EPSILON);
}


export function loadMap(segments: Segment[], lightSource: Lightsource): EndPoint[] {
  // console.log("segments", segments);

  // const hyptns = lightSource.range;
  // for(let i = 0; i < 35; i++){
  //   segments.push(new Segment(
  //     0,
  //     0,
  //     0,
  //     0,
  //     new Wall(0, 0, 'edge')
  //   ));
  // };

  const endPoints: EndPoint[] = [];
  for (const segment of processSegments(lightSource, segments)) {
    endPoints.push(segment.p1, segment.p2);
  }
  // console.log("endPoints", endPoints);
  return endPoints;
}
