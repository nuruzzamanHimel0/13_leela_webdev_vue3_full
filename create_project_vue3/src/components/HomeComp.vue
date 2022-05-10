<template>
    <div>
        Home Component here
        <h2>counter: {{ $store.state.count }} </h2>

        <button class="btn btn-success" @click.prevent="goToPost()">Go to post</button>
    </div>
</template>

<script>
export default {
    methods:{
        goToPost(){
            // this.$router.replace({ name: 'user-details', query:{id:10} });
            this.$router.push({ name: 'user-details', query:{id:10} });
        }
    }
}
</script>