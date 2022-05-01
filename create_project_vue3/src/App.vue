<template>
  <div class="container">
    <div class="row justify-content-center ">
      <div class="col-md-6 my-5">
       

        <ButtonComponent >
          <template v-slot:data>
             <i class="fa fa-user-circle" aria-hidden="true" ></i> &nbsp; User Data
          </template>
          
        </ButtonComponent>
        <ButtonComponent >
            <template v-slot:user>
             <i class="fa fa-user-circle" aria-hidden="true"></i> &nbsp; User user
            </template>
           
        </ButtonComponent>
          <ButtonComponent >
          <template v-slot:user2>
            <i class="fa fa-user-circle" aria-hidden="true"></i> &nbsp; User user2
          </template>
           
        </ButtonComponent>
        <hellowWorld></hellowWorld>
      </div>
    </div>
  </div>
</template>

<script>

import hellowWorld from '../src/components/HelloWorld.vue'
import ButtonComponent from './components/ButtonComponent.vue'
  export default {
    data(){
      return {
        
      }
    },
    methods:{
      

    },
    components:{
      hellowWorld,
      ButtonComponent
    }
    
  }
</script>