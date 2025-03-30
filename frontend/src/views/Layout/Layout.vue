<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeMenu" class="el-menu-vertical">
        <RouterLink to="/SystemView">
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
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { Edit, House } from '@element-plus/icons-vue'
// 使用watchEffect监听路由变化
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
const activeMenu = ref('1')
const router = useRouter()
watchEffect(() => {
  const routers = router.currentRoute.value.matched
  activeMenu.value = router.currentRoute.value.path
  if (activeMenu.value === '/SystemView') {
    activeMenu.value = '1'
  } else if (activeMenu.value === '/SystemView/editor') {
    activeMenu.value = '2'
  }
})
</script>

<style>
.child-router-view {
  flex: 1;
}
.el-menu,
.el-aside,
.el-main {
  height: calc(100vh - 60px);
}
</style>
