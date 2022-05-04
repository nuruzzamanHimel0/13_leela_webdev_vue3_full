import HomeComponent from '../components/HomeComp.vue'
import CreateUserComponent from '../components/CreateUserComponent.vue'
import UserDetailsComponent from '../components/UserDetailsComponent.vue'

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
      name: "user-details",
      component: UserDetailsComponent,
    },
 
  ];

  export default routes;