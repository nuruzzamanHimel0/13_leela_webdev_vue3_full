<template>
    <div>
        <!-- <button class="btn btn-success">
       
        </button> -->
        <ButtonComp> 
             <font-awesome-icon :icon="['fas', 'star']" />  User ButtonComp
        </ButtonComp>
    </div>
</template>
<script>



// import userPost from '../components/PostUser.vue'
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

