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
  // router.beforeEach(async (to, from, next) =>{
  //   console.log(to);
  //   console.log(from);
  //   if(to.path == '/create-user'){
  //     router.push({
  //       name : 'side-single-user',
  //       params: {
  //         id: 18
  //       }
  //     });
  //   }
  //   next();
  // } );
  
export default router;