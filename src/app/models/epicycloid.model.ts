export interface EpicycloidModel {

    id: number | undefined,
    radius: number,
    frequency: number,
    rolling: EpicycloidModel | undefined,
    fixed: EpicycloidModel | undefined,
    name: string | undefined,
}

export class Epicycloid implements EpicycloidModel {

  public id: number | undefined;
  public radius: number;
  public frequency: number;
  public rolling: EpicycloidModel | undefined;
  public fixed: EpicycloidModel | undefined;
  public name: string | undefined;

  constructor(radius: number, frequency: number) {
    this.radius = radius;
    this.frequency = frequency;
  }
}
