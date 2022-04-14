<template>
    <div>
        <h2>Single Post Child Component</h2>
        <ul>
            <div class="title">{{ compost.title }} </div>
            <div >{{ compost.description }} </div>
            <a href="" @click.prevent="changeTitle()" > Change Title </a>
        </ul>
        <hr>
    </div>
</template>
<script>
export default {
    props:['data','isActive'],
    data(){
        return {
           compost: this.data,
        }
    },
    methods:{
        changeTitle(){
            this.compost.title ="Change Post Title"
        }
    }
}
</script>