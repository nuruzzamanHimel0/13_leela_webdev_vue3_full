<template>
    <div>
        <div class="my-4"  :class="{'bg-gray' : isActive == 1}" >
            <h4>{{post.title}}</h4>
            <p>{{post.description}}</p>
            <a href="" class="btn btn-success" @click.prevent="changeChildCompTitle()">Change Child Comp Title</a>
            <a href=""
                class="btn btn-primary"
                @click.prevent="childTOParEmit()"
            >(FROM child comp)Custom event emit chile to parent comp title udt</a>
            <br>
             <compSinglePost> </compSinglePost>
        </div>
        <hr>
       
    </div>
</template>

<script>

import compSinglePost from '@/components/singleUser.vue'

export default {
    //custome event emit valiaiton
    emits:{
    titlechanged : (post) => {
        if(post.id && post.title && post.description){
            console.log('valide custome event');
            return true;
        }
        console.log('invalide custome event');
        return false;
     
    }
  },
  components:{
      compSinglePost
  },
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
        },
        childTOParEmit(){
            this.post.title = "Custom event emit chile to parent comp Update Title="+this.post.id;

            this.$emit('titlechanged',this.post);
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