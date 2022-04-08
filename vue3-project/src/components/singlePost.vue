<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>{{ post.title }} </p>
                    <p>{{ post.description }} </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            post:{
                title: 'this is title one',
                description: 'This is post title description'
            }
        }
    }
}
</script>