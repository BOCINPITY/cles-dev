<template>
  <div class="container">
    <el-menu default-active="1" class="el-menu-vertical">
      <RouterLink to="/SystemView/home">
        <el-menu-item index="1">
          <template #title>
            <el-icon><House /></el-icon>
            <span>Home</span>
          </template>
        </el-menu-item>
      </RouterLink>
      <RouterLink to="/SystemView/editor">
        <el-menu-item index="2">
          <el-icon><Edit /></el-icon>
          <template #title>Map Editor</template>
        </el-menu-item>
      </RouterLink>
    </el-menu>
    <div class="child-router-view">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MapLocation, Edit, House } from '@element-plus/icons-vue'
</script>

<style>
.container {
  display: flex;
  height: calc(100vh - 60px);
}
.child-router-view {
  flex: 1;
}
.el-menu-vertical:not(.el-menu--collapse) {
  font-weight: bold;
  width: 200px;
  min-height: 500px;
}
</style>
