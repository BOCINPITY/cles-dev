import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cles-dev',
      component: Home,
    },
    {
      path: '/cles-dev/SystemView',
      component: () => import('@/views/SystemView.vue'),
      children: [
        {

          path: '',
          component: () => import('@/views/SystemChildViews/SystemHome.vue'),
        },
        {
          path: 'editor',
          component: () => import('@/views/SystemChildViews/MapEditor.vue'),
        },
      ],
    },
  ],
})

export default router
