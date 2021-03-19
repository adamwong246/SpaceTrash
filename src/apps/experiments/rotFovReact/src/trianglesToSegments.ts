import { Segment } from '../vendor/2d-visibility/src/segment';

interface ITriangle {
  first: {
    x: number, y: number
  }, second: {
    x: number, y: number
  }
};

export default (triangles) => {

  return triangles.reduce((mm: any[], triangle: ITriangle) => {
    const equalPoints = ((triangle.first.x === triangle.second.x) && (triangle.first.y === triangle.second.y))
    if (!equalPoints) {
      const lastSegment = mm[mm.length - 1];
      if (
        (lastSegment &&
          triangle.first.x !== lastSegment.start[0]) && (triangle.first.y !== lastSegment.start[1])
      ) {
        mm.push(
          {
            id: -2,
            start: [lastSegment.end[0], lastSegment.end[1]],
            end: [triangle.first.x, triangle.first.y],
            myFill: {
              above: true,
              below: false
            },
            otherFill: null
          }
        )
      }

      mm.push(
        {
          id: -1,
          start: [triangle.first.x, triangle.first.y],
          end: [triangle.second.x, triangle.second.y],
          myFill: {
            above: true,
            below: false
          },
          otherFill: null
        }
      )
    }
    return mm;
  }, [])
}
