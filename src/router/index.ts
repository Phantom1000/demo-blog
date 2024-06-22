import { createRouter, createWebHistory } from 'vue-router'
import PostInfoView from '@/views/PostInfoView.vue'
import PostView from '@/views/PostView.vue'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView
    },
    {
      path: '/posts/:id',
      component: PostInfoView,
      name: 'post'
    }
  ]
})

export default router
