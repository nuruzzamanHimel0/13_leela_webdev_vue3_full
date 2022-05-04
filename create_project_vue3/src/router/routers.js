import HomeComponent from '../components/HomeComp.vue'
import CreateUserComponent from '../components/CreateUserComponent.vue'
import UserDetailsComponent from '../components/UserDetailsComponent.vue'
import SingleUser from '../components/SingleUser.vue'

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomeComponent,
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
    },
    {
        path: "/user-single/:id",
        name: 'user-single',
        component: SingleUser,
        props:true,
      },
 
  ];

  export default routes;