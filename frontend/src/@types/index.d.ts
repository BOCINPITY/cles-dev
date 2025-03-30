export type IComponentShapeType =
  | 'rect' // 矩形
  | 'parallelogran' // 平行四边形
  | 'rhombus' // 菱形
  | 'arrows' // 箭头
  | 'text' // 文本
  | 'circle' // 圆形
  | 'angular' // 圆环
  | 'pentagon' // 五边形
  | 'hexagon' // 六边形
  | 'fivestar' // 五角星
  | 'trapezium' // 梯形
  | 'fan' // 扇形
  | 'heart' // 心形
export interface IComponentShape {
  name: string
  icon: string
  type: IComponentShapeType
}
