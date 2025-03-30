import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Index from '@/views/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/SystemView',
      component: () => import('@/views/Layout/Layout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home/SystemHome.vue'),
        },
        {
          path: 'editor',
          component: () => import('@/views/MapEditor/MapEditor.vue'),
        },
      ],
    },
  ],
})

export default router
