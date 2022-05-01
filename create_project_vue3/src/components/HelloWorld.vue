<template>
  <div >
     <ButtonComponent  >
        <template v-slot:hellow>
          <i class="fa fa-user-circle" aria-hidden="true"></i> &nbsp; User hellow
        </template>
     </ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    ButtonComponent
  }
}
</script>

