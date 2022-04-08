<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>{{ post.title }} </h4>
                    <p>{{ post.description }} </p>
                    <a href="" @click.prevent="changeTitle()" >Change Title name</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           post: this.data
        }
    },
    props:['data','isActive'],
    methods:{
        changeTitle(){
            this.post.title = "change post title here";
        }
    }
}
</script>

<style scoped>
    h4{
        color:red;
    }
</style>