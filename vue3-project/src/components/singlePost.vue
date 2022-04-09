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

import {Post} from '../services/postService'

export default {
      // 33. Apply Validation for the emitted custom events in Vue js Vue 3
  // emits:['titlechanged'],
  // or
  emits:{
    titlechanged : (post) => {
    //   if(post.id && post.title && post.description){
      if(post instanceof Post ){
        console.log('valid');
        return true;
      }
      console.log('invalide post data');
      return false;
    }
  },
    data(){
        return {
        //    post: this.postdata
        // memory te onno jaygay data store kore
           post: {...this.postdata}
        }
    },
    // props:['data','isActive'],
    //or
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

            const postData = new Post(this.post.id, this.post.title, this.post.description);
            this.$emit('titlechanged',postData);

            // this.$emit('titlechanged',this.post);
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