<template>
    <div>
        <h4>Post User Comp: <i>{{user.value}}</i></h4>
        <a href="" @click.prevent="changeUserChild('Change User By provide/inject  Child COmponent')" >Change User By provide/inject  Child COmponent</a>
    </div>
</template>
<script>
export default {
    inject:['user', 'changeUserChild'],
    data(){
        return{

        }
    },
    mounted(){
        console.log(this.user.value);
    }
  
}
</script>