<template>
    <div>
        <p>{{user.value}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{

    },
    inject:['user'],
    mounted(){
        console.log(this.user);
    }
}
</script>