<template>
  <div>
      <div class="container">
      <div class="row">
        <div class="col-md-">
          <h1>Slot</h1>
          
            <ButtonComp> 
               <font-awesome-icon :icon="['fas', 'phone']" />  &nbsp; Phone ButtonComp  
            </ButtonComp>
            <ButtonComp> 
               <font-awesome-icon :icon="['fas', 'user']" /> &nbsp;  user ButtonComp
            </ButtonComp>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComp from './ButtonComp.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    ButtonComp
  }
}
</script>