<template>
  <div class="container">
    <the-nav-component></the-nav-component>
    <div class="row justify-content-center ">
        <div class="col-md-12">
           <router-view></router-view>
        </div>
    </div>
   
  </div>
</template>

<script>
  import TheNavComponent from '../src/components/TheNavComponenet.vue'
  export default {
    data(){
      return {
          
      }
    },
    computed:{
    
    },
    methods:{
      
    },
    components:{
      TheNavComponent
    }
    
  }
</script>