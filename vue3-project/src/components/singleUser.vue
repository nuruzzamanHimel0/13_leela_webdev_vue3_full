<template>
    <div>
        <hr>
        <p>############ singleUser child Comp ##########</p>
        <p><b>Single childe comp User=</b>: {{user.value}}</p>
        <a href="" @click.prevent="updateParentUsr({name:'change usre name HIMEL VAI'})" >provide/inject child to parent user udt</a>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    inject:['user','updateParentUsr'],
}
</script>