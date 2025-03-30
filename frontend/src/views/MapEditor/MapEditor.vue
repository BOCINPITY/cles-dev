<template>
  <div class="map-editor-container">
    <div class="header">
      <div class="title">地图编辑器</div>

      <div class="operation">
        <el-button type="primary" @click="handleSave">保存</el-button>
        <el-button type="danger" @click="handleReset">清空</el-button>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <p class="decription">基本障碍物</p>
        <div class="shapeList">
          <div
            class="shapeItem"
            v-for="(item, index) in componentShapeList"
            :key="index"
            @click="handleClick(item)"
          >
            <i :class="`icon icon-font ${item.icon}`"></i>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="editor">
        <div id="cavans"></div>
      </div>
      <!-- <div class="right">
        <p class="decription">属性</p>
        <div class="attrs">
          <div class="attr-items">
            <div class="label">X</div>
            <el-input
              v-model="selectedShape.x"
              @input="updateShapeAttribute('x', $event)"
            />
          </div>
          <div class="attr-items">
            <div class="label">Y</div>
            <el-input
              v-model="selectedShape.y"
              @input="updateShapeAttribute('y', $event)"
            />
          </div>
          <div class="attr-items">
            <div class="label">宽</div>
            <el-input
              v-model="selectedShape.width"
              @input="updateShapeAttribute('width', $event)"
            />
          </div>
          <div class="attr-items">
            <div class="label">高</div>
            <el-input
              v-model="selectedShape.height"
              @input="updateShapeAttribute('height', $event)"
            />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { componentShapeList } from "@/utils/consts";
import type { IComponentShape } from "@/@types/index";
import { KonvaJS } from "@/utils/konva";
const stage = ref<KonvaJS | null>(null);

const handleReset = () => {
  stage.value?.clearStage();
};
const handleSave = () => {
  const data = stage.value?.stage?.toJSON();
  console.log("保存数据", JSON.parse(data!), data);
};
const handleClick = (el: IComponentShape) => {
  if (stage.value) {
    stage.value.addShapeToStage(el);
  }
};

onMounted(() => {
  stage.value = new KonvaJS("cavans");
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
.decription {
  font-size: 18px;
  font-weight: lighter;
  padding: 10px;
  background-color: #979797;
}
#cavans {
  width: 90%;
  height: 80%;
  background-color: #fff;
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
