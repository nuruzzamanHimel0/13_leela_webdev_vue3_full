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
    <div class="row">
      <div class="col-md-4">
            <profile-cart>
              <template v-slot:header>
                <h2>This is Header Section</h2>
              </template>
          
              <template v-slot:footer>
                <h5>This is footer Section</h5>
              </template>
              <template v-slot:content>
                <h4>This is content Section</h4>
              </template>
            </profile-cart>
         
      </div>
      <div class="col-md-4">
            <profile-cart>
            
            </profile-cart>
         
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 my-3">
        <h1>=>Scoped Slot</h1>
        <hr>
        <hobbies-component>
          <template v-slot="value" >
            <h3>{{ value.hobbies }}</h3>
          </template>
        </hobbies-component>
      </div>
    </div>
  </div>
</template>

<script>

import hellowWorld from '../src/components/HelloWorld.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import ProfileCart from './components/ProfileCart.vue'
import HobbiesComponent from './components/HobbiesComponent.vue'

  export default {
    data(){
      return {
        
      }
    },
    methods:{
      

    },
    components:{
      hellowWorld,
      ButtonComponent,
      ProfileCart,
      HobbiesComponent
    }
    
  }
</script>