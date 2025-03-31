//障碍物
export interface IObstacles {
  position: IPoint; // 障碍物坐标
  width: number; // 障碍物宽度
  height: number; // 障碍物高度
  shape: 'rect' | 'circle'; // 障碍物形状
  color?: string; // 障碍物颜色
  scale?: number; // 障碍物缩放比例
  rotate?: number; // 障碍物旋转角度
}
//点坐标
export interface IPoint {
  x: number; // 起点X坐标
  y: number; // 起点Y坐标
}
//实际上对应的前端的画布的宽高
export interface IMap {
  mapId: string; // 地图唯一ID
  width: number; // 地图宽度
  height: number; // 地图高度
  obstacles: IObstacles[];
  startPoint?: IPoint;
  endPoint?: IPoint;
  createdAt?: Date;
  updatedAt?: Date;
}
//四叉树节点
export interface IMapQuadTreeNode {
  x: number; // 区域左上角X坐标
  y: number; // 区域左上角Y坐标
  width: number; // 区域宽度
  height: number; // 区域高度
  isObstacle: boolean; // 是否包含障碍物
  children: IMapQuadTreeNode[]; // 子节点列表（非叶子节点有效）
}
//当用户请求地图时，返回的地图数据和对应的四叉树结构
export interface IMapResponse {
  mapId: string; // 地图唯一ID
  quadTree: IMapQuadTreeNode; // 四叉树根节点
}
