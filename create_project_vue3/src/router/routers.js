import HomeComponent from '../components/HomeComp.vue'
import CreateUserComponent from '../components/CreateUserComponent.vue'
import UserDetailsComponent from '../components/UserDetailsComponent.vue'
import SingleUser from '../components/SingleUser.vue'
import NotFound from '../components/NotFoundComponent'
import SideSingleUser from '../components/partials/sideSingleUser.vue'
import NoPost from '../components/partials/NoPostComponent.vue'

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomeComponent,
      // redirect: '/create-user',
      alias:'/home'

    },
    {
      path: "/create-user",
      name: "create-user",
      component: CreateUserComponent,
    },
    {
      path: "/user-details",
      name: 'user-details',
      component: UserDetailsComponent,
      children:[
        {
          path:'',
          name:'no-post',
          component: NoPost
        },
        {
          path:'side-single-user/:id',
          name:'side-single-user',
          component: SideSingleUser
        }
      ]
    },
    {
        path: "/user-single/:id",
        name: 'user-single',
        component: SingleUser,
        props:true,
      },
      { path: '/:NotFound(.*)*', name: 'NotFound', component: NotFound },
 
  ];

  export default routes;