import { EndPoint } from './end-point';

class Wall {
    constructor(
      public x: number,
      public y: number,
      public wallType: string
    ) {
    }
  }

export class Segment {
    public p1: EndPoint;
    public p2: EndPoint;
    public d: number = 0;
    public wall: Wall;

    constructor(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        wall: Wall
    ) {
        this.p1 = new EndPoint(x1, y1);
        this.p2 = new EndPoint(x2, y2);
        this.p1.segment = this;
        this.p2.segment = this;
        this.wall = wall;

        // console.log(wall)
    }
}
