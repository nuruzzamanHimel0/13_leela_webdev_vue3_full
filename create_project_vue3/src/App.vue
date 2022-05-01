<template>
  <div class="container">
    <div class="row justify-content-center ">
        <div class="col-md-12">
            <button v-for="(value, key) in buttonset"
             :key="key"
             class="btn"
             :class="[value == 'Home' ? 'btn-success': '',value == 'Post' ? 'btn-warning': '',value == 'About' ? 'btn-primary': '', isBtnActive == value ? 'btn-danger': '' ]"
             @click.prevent="btnClick(value)"
             >
                {{ value }}
            </button>

            <keep-alive>
              <component :is="activeComponent"></component>
            </keep-alive>
        </div>
    </div>
   
  </div>
</template>

<script>
  // import HomeComponent from '../src/components/HomeComp.vue'
  // import PostComponent from '../src/components/PostComponent.vue'
  // import AboutComponent from '../src/components/AboutComponent.vue'

//42. Async Components in Vue js . Assign Name for the chunks using webpackchunkname in Vuejs Vue 3
  import {  defineAsyncComponent } from "vue";
  const HomeComponent = defineAsyncComponent(() => import("../src/components/HomeComp.vue"));
  const PostComponent = defineAsyncComponent(() => import("../src/components/PostComponent.vue"));
  const AboutComponent = defineAsyncComponent(() => import("../src/components/AboutComponent.vue"));

  export default {
    data(){
      return {
          buttonset: [
            'Home',
            'Post',
            'About',
          ],
          isBtnActive:null,
          isComponent:"Home"
      }
    },
    computed:{
      activeComponent(){
        return this.isComponent+"Component"
      }
    },
    methods:{
        btnClick(value){
          this.isBtnActive = value;
          this.isComponent = value;
        }
    },
    components:{
      HomeComponent,
      PostComponent,
      AboutComponent
    }
    
  }
</script>