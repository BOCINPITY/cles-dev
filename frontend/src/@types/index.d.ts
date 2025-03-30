import type Konva from 'konva'

export type IComponentShapeType =
  | 'rect' // 矩形
  | 'parallelogran' // 平行四边形
  | 'rhombus' // 菱形
  | 'arrows' // 箭头
  | 'text' // 文本
  | 'circle' // 圆形
  | 'angular' // 圆环
  | 'hexagon' // 六边形
  | 'fivestar' // 五角星
  | 'trapezium' // 梯形
  | 'fan' // 扇形
  | 'heart' // 心形

type dafaultConfig =
  | Konva.RectConfig // 矩形
  | Konva.ParallelogramConfig // 平行四边形
  | Konva.RhombusConfig // 菱形
  | Konva.ArrowConfig // 箭头
  | Konva.TextConfig // 文本
  | Konva.CircleConfig // 圆形
  | Konva.ArcConfig // 圆环
export interface IComponentShape {
  name: string
  icon: string
  type: IComponentShapeType
}
