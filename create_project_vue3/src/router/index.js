import { createWebHistory, createRouter } from "vue-router";
import routes from './routers.js'
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'nav-active'
  });
  
export default router;