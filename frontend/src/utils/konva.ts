import type { IComponentShape } from '@/@types'
import Konva from 'konva'
export class KonvaJS {
  public id: string
  public stage: Konva.Stage | null
  public layer: Konva.Layer
  public shapes: Konva.Shape[]
  public transformer: Konva.Transformer
  private fillColor: string
  private strokeColor: string
  private strokeWidth: number
  constructor(id: string) {
    this.id = id
    this.stage = null
    this.layer = new Konva.Layer()
    this.shapes = []
    this.transformer = new Konva.Transformer() // 初始化 Transformer
    this.fillColor = '#000'
    this.strokeColor = '#000000'
    this.strokeWidth = 0
    this.init()
  }
  init() {
    const el = document.getElementById(this.id)
    if (!el) {
      throw new Error(`Element with id ${this.id} not found`)
    }
    const { clientWidth, clientHeight } = el
    this.stage = new Konva.Stage({
      container: this.id,
      width: clientWidth,
      height: clientHeight,
      draggable: false,
    })
    this.layer.add(this.transformer) // 将 Transformer 添加到图层
    this.stage.add(this.layer)
    this.stageEvents()
  }
  public addShapeToStage(type: IComponentShape) {
    const shape = this.createShape(type)
    if (shape) {
      this.layer.add(shape)
      this.shapes.push(shape)
      this.setTransformerToShape(shape) // 绑定 Transformer 到新创建的图形
    }
  }

  clearStage() {
    this.layer.destroyChildren() // 清除图层上的所有图形
    this.shapes = [] // 清空 shapes 数组
    this.transformer.nodes([]) // 清除 Transformer 的绑定
    this.layer.draw() // 重绘图层
  }
  stageEvents() {
    this.stage?.on('click', (e) => {
      // 如果点击的是舞台（空白区域），清除 Transformer 的绑定
      if (e.target === this.stage) {
        this.transformer.nodes([])
        this.layer.draw()
        return
      }

      // 如果点击的是图形，绑定 Transformer 到该图形
      this.setTransformerToShape(e.target as Konva.Shape)
    })
  }
  setTransformerToShape(shape: Konva.Shape) {
    this.transformer.nodes([shape]) // 绑定 Transformer 到选中的图形
    this.layer.add(this.transformer) // 将 Transformer 添加到图层
    this.layer.draw()
  }
  createShape(type: IComponentShape) {
    const { type: shapeType } = type
    let shape: Konva.Shape | null = null
    switch (shapeType) {
      case 'rect':
        shape = new Konva.Rect({
          x: 50,
          y: 50,
          width: 100,
          height: 100,
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          draggable: true,
        })
        break
      case 'fan':
        shape = new Konva.Arc({
          x: 50,
          y: 50,
          innerRadius: 0,
          outerRadius: 50,
          angle: 90,
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          draggable: true,
        })
        break
      case 'circle':
        shape = new Konva.Circle({
          x: 50,
          y: 50,
          radius: 50,
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          draggable: true,
        })
        break
      case 'angular':
        shape = new Konva.Arc({
          x: 50,
          y: 50,
          innerRadius: 50,
          outerRadius: 100,
          angle: 360,
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          draggable: true,
        })
        break
      case 'hexagon':
        shape = new Konva.RegularPolygon({
          x: 50,
          y: 50,
          sides: 6,
          radius: 50,
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          draggable: true,
        })
        break
      case 'trapezium':
        shape = new Konva.Line({
          x: 50,
          y: 50,
          points: [0, 0, 100, 0, 80, 100, 20, 100],
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          closed: true,
          draggable: true,
        })
        break
      case 'rhombus':
        shape = new Konva.Line({
          x: 50,
          y: 50,
          points: [0, 0, 50, 50, 0, 100, -50, 50],
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          closed: true,
          draggable: true,
        })
        break
      case 'parallelogran':
        shape = new Konva.Line({
          x: 50,
          y: 50,
          points: [0, 0, 100, 0, 80, 100, -20, 100],
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          closed: true,
          draggable: true,
        })
        break
      case 'fivestar':
        shape = new Konva.Star({
          x: 50,
          y: 50,
          numPoints: 5,
          innerRadius: 20,
          outerRadius: 40,
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          draggable: true,
        })
        break
      case 'heart':
        shape = new Konva.Path({
          x: 50,
          y: 50,
          data: 'M 0 0 C -50 -50, -100 -50, -100 0 C -100 50, 0 100, 0 150 C 0 100, 100 50, 100 0 C 100 -50, 50 -50, 0 0 Z',
          fill: this.fillColor,
          stroke: this.strokeColor,
          strokeWidth: this.strokeWidth,
          draggable: true,
        })
        break
      default:
        console.error(`Unknown shape type: ${shapeType}`)
        return null
    }
    return shape
  }
}
