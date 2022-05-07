import { createWebHistory, createRouter } from "vue-router";
import routes from './routers.js'
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'nav-active'
  });
  router.beforeEach(async (to, from, next) =>{
    console.log(to);
    console.log(from);
    if(to.path == '/create-user'){
     
    }
    next();
   
    //  return false;
  } );
  
export default router;