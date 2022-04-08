<template>
    <div>
        <div class="container">
            <div class="row" :class="{ 'bg-color-gray' : isActive == 1 }" >
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
           post: this.postdata
        }
    },
    // props:['data','isActive'],
    props:{
        postdata:{
            type: Object,
            required: false,
            default:function(){
                return  {
                    title: 'This is a title one',
                    description: 'This is a post title descirption'
                }
            }
        },
        isActive:{
            type: Number,
            required:true,
            default:1,
            validator: function(value){
                return [0,1].includes(value);
            }
        }
    },
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
    .bg-color-gray{
        background: #ddd;
    padding: 9px;
    }
</style>