<template>
  <div class="container">
    <div class="left"><MapLoader /></div>
    <el-divider direction="vertical" style="height: auto" />
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import MapLoader from "@/components/MapLoader.vue";
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
  justify-content: space-between;
}
.left,
.right {
  flex: 1;
}
</style>
