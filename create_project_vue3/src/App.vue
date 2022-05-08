<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="box" :class="{moveBox: moveBox}" >
          himel
        </div>
        <br>
        <a href="" @click.prevent="startAnimation()" class="btn btn-success">Start Animation</a>
        <a href="" @click.prevent="endAnimation()" class="btn btn-success">End Animation</a>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  data(){
    return{
      moveBox: false
    }
  },
  methods:{
    startAnimation(){
      this.moveBox = true;
    },
    endAnimation(){
      this.moveBox = false;
    }
  }
}
</script>
<style scoped>
  .box{
    width: 100px;
    height: 100px;
    background: red;
  }
  .moveBox{
     position: relative;
    animation-name: example;
    animation-duration: 4s;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
  }
  @keyframes example {
  0%   {background-color:red; left:0px; top:0px;}

  50%  {background-color:blue; left:500px; top:0px;}

  100% {background-color:red; left:0px; top:0px;}
}
</style>


 