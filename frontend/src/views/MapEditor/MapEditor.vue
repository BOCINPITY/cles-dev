<template>
  <div class="map-editor-container">
    <div class="header">
      <div class="title">地图编辑器</div>

      <div class="operation">
        <el-button type="primary">保存</el-button>
        <el-button type="danger">清空</el-button>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <p class="decription">基本障碍物</p>
        <div class="shapeList">
          <div class="shapeItem" v-for="(item, index) in componentShapeList" :key="index">
            <i :class="`icon icon-font ${item.icon}`"></i>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="editor">
        <div id="cavans"></div>
      </div>
      <div class="right">
        <p class="decription">属性</p>
        <div class="attrs">
          <div class="attr-items">
            <div class="label">标题</div>
            <el-input></el-input>
          </div>
          <div class="attr-items">
            <div class="label">宽</div>
            <el-input></el-input>
          </div>
          <div class="attr-items">
            <div class="label">高</div>
            <el-input></el-input>
          </div>
          <div class="attr-items">
            <div class="label">X</div>
            <el-input></el-input>
          </div>
          <div class="attr-items">
            <div class="label">Y</div>
            <el-input></el-input>
          </div>
        </div>
        <p class="decription">外形</p>
        <div class="attrs">
          <div class="attr-items">
            <div class="label">不透明度</div>
            <el-slider />
          </div>
          <div class="attr-items">
            <div class="label">填充</div>
            <el-color-picker />
          </div>
          <div class="attr-items">
            <div class="label">边框</div>
            <el-color-picker />
          </div>
          <div class="attr-items">
            <div class="label">边框宽度</div>
            <el-input></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Konva from "konva";
import { componentShapeList } from "@/utils/consts";
const init = () => {
  const el = document.getElementById("cavans");
  if (!el) {
    return;
  }
  //创建舞台
  const stage = new Konva.Stage({
    container: "cavans", // id of container <div>
    width: 500,
    height: 500,
  });
  //创建图层
  const layer = new Konva.Layer();
  //创建矩形
  const rect = new Konva.Rect({
    x: 20,
    y: 20,
    width: 100,
    height: 100,
    fill: "white",
    stroke: "black",
    strokeWidth: 4,
  });
  //添加矩形到图层
  layer.add(rect);
  //添加图层到舞台
  stage.add(layer);
};

onMounted(() => {
  init();
});
</script>

<style scoped>
.map-editor-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .operation {
    padding: 10px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
}
#cavans {
  width: 95%;
  height: 80%;
  background-color: white;
}
.decription {
  font-size: 18px;
  font-weight: lighter;
  padding: 10px;
  background-color: #979797;
}
.content {
  border: 1px solid #ccc;
  display: flex;
  flex: 1;
  .left {
    width: 200px;
    background-color: #f0f0f0;

    .shapeList {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      justify-content: space-between;
      .shapeItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 8px;
        .name {
          font-size: 14px;
          font-weight: lighter;
          margin-top: 5px;
        }
      }
      .shapeItem:hover {
        cursor: pointer;
        background-color: #ccc;
        transition: all 1s;
      }
    }
  }
  .editor {
    flex: 1;
    background-color: #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .right {
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
    .attrs {
      display: flex;
      flex-direction: column;
      .attr-items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        .label {
          font-size: 14px;
          font-weight: lighter;
          width: 120px;
          text-align: center;
        }
      }
    }
  }
}
</style>
