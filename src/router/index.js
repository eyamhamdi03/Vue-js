import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/HomeVue.vue'
import JobsVue from '@/views/JobsVue.vue'
import NotFoundVue from '@/views/NotFoundVue.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsVue,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundVue,
    },
  ],
})
export default router
