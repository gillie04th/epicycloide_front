export interface EpicycloidModel {
    id: number,
    radius: number,
    frequency: number,
    rolling: EpicycloidModel,
    fixed: EpicycloidModel,
    name: string,
}
