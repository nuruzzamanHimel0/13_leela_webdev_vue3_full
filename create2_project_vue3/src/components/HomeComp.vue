<template>
    <div>
        <h2>Home Component</h2>
        <button @click.prevent="clickHere()">Click Here</button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        clickHere(){
            this.$router.replace({name:"Post",query:{slag:'test-slag'}});
        }
    }
}
</script>