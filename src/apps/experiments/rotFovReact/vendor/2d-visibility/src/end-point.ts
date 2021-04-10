import { Point } from './point';

export class EndPoint extends Point {
  public beginsSegment?: any;
  public segment?: any;
  public angle?: any;

  constructor(
    public x: number,
    public y: number,
  ) {
    super(x, y);
  }
}
