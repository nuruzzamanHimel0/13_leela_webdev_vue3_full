<template>
  <div>
    <NavbarComp></NavbarComp>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    NavbarComp
  }
}
</script>
<style scoped>
.router-link-active{
  background: green;
  color:#fff;
}
</style>