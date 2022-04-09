<template>
    <div>
        <p>{{user.value}}</p>
        <a href="" class="btn btn-primary" @click.prevent="changeUserChild('change User From child Nuruzzaman')" >  Change User From child</a>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{

    },
    inject:['user','changeUserChild'],
    mounted(){
        console.log(this.user);
    }
}
</script>