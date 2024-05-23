export interface PointModel {
  x: number,
  y: number,
  t: number | undefined,
}

export class Point implements PointModel {

  public x: number;
  public y: number;
  public t: number | undefined;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
