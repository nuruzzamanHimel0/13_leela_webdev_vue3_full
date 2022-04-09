<template>
    <div>
        <div class="my-4"  :class="{'bg-gray' : isActive == 1}" >
            <h4>{{post.title}}</h4>
            <p>{{post.description}}</p>
            <a href="" class="btn btn-success" @click.prevent="changeChildCompTitle()">Change Child Comp Title</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            post: {...this.data},
        }
    },
    props:{
        data:{
            type:Object,
            required:false,
            default:function(){
               return {
                id: 1,
                title: 'This is a title one',
                description: 'This is a post title descirption'
                }
            }
        },
        isActive:{
            type: Number,
            required:true,
            default:1,
            validator: (value) =>{
                return [0,1].indexOf(value);
            }
        }
    },
    methods: {
        changeChildCompTitle(){
            this.post.title = "Change Child Componet Title ="+this.post.id;
        }
    },
}
</script>

<style scoped>
    .bg-gray{
        background: #ddd;
        padding: 10px;
        border-radius: 5px;
    }
</style>