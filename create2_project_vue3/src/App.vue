<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <button class="btn my-4" v-for="(value, key) in menus" :key="key"
            :class="[value == 'Home' ? 'btn-primary' :'', value == 'Contact' ? 'btn-success': '', value == 'About' ? 'btn-warning': '', value == 'Posts' ? 'btn-danger': '' ]"
            @click.prevent="changeMenu(value)"
             >
              {{ value }}
            </button>
        </div>
        <div class="col-md-12">
          <keep-alive>
            <component :is="hasComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>
   
    
     

  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import PostsComponent from './components/PostsComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

export default {
  data(){
    return {
        menus:['Home', 'Contact', 'About', 'Posts'],
        selectComponent: 'HomeComponent'
    }
  },
  computed:{
    hasComponent(){
      return this.selectComponent;
    }
  },

  methods:{
      changeMenu(value){
        this.selectComponent = value+"Component";
        console.log(value);
      }
    
  },
  components:{
    HomeComponent,AboutComponent,PostsComponent,ContactComponent
  }

}
</script>