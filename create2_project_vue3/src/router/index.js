import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})
export default router