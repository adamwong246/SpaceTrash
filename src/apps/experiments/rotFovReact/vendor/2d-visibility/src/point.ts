export class Lightsource {
  constructor(
    public position: Point,
    public range: number,
  ) {
  }
}

export class Wall {
  constructor(
    public x: number,
    public y: number,
    public wallType: string
  ) {
  }
}

export class Point {
  constructor(
    public x: number,
    public y: number
  ) {
  }
}

export class VizTriangle {
  constructor(
    public first: Point,
    public second: Point,
    public wall: Wall,
    public uid: any
  ) {
  }
}
