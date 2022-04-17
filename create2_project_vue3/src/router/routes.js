import HomeComp from '../components/HomeComp.vue'
import PostComp from '../components/PostComp.vue'
import CreatePostComp from '../components/CreatePostComp.vue'
const routes = [
  { 
    path: '/', 
    component: HomeComp,
    name:'Home' 
  },
  { 
    path: '/', 
    component: PostComp,
    name:'Post' 
  },
  { 
    path: '/', 
    component: CreatePostComp,
    name:'CreatePost' 
  },
    
];
export default routes;