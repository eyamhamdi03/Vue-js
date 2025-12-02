import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/HomeVue.vue'
import JobsVue from '@/views/JobsVue.vue'
import NotFoundVue from '@/views/NotFoundVue.vue'
import JobVue from '@/views/JobVue.vue'
import AddJobVue from '@/views/AddJobVue.vue'
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
    {
      path: '/job/:id',
      name: 'job-details',
      component: JobVue,
    },
    {
      path: '/job/:id/edit',
      name: 'job-edit',
      component: JobVue,
    },
     {
      path: '/add-job',
      name: 'add-job',
      component: AddJobVue,
    },
  ],
})
export default router
