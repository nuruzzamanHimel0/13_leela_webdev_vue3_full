import { createWebHistory, createRouter } from "vue-router";
import routes from './routers.js'
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'nav-active'
  });
  router.beforeEach(()=>{
    console.log('Global before each route');
  });

  router.afterEach((failure)=>{
    console.log(failure);
    console.log('Global after each route');
  });

  
export default router;