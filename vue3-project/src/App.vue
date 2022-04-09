<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2>POSTS</h2>
          <div class="my-4">
            <compSelectComponet
              data-status = '1'
              id="selectBox"
           
            ></compSelectComponet> 
          </div>

          <div class="my-4">
            <p>{{user}}</p>
            <a href="" @click.prevent="changeUserName()" >Change User aname</a>
          </div>
        
          <div v-for="(value, key) in posts" :key="key">
              <a href="" @click.prevent="changeFirstTitle(key)" >Change First Title here</a>
              
            <compSInglePost v-bind:postdata="value" :isActive="1"
              v-on:titlechanged="onTitleChange($event)"
             ></compSInglePost>
           
            <br>
          </div>
         
        </div>
        <div class="col-md-4">
          <h2>Latest Post:</h2>
          <ul class="list-group mt-5">
            <li class="list-group-item" v-for="(value,key) in posts" :key="key" >
              {{ value.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

 import compSInglePost from '@/components/singlePost.vue'

 import compSelectComponet from '@/components/selectComponent.vue'


 import { computed } from 'vue'

export default {

  data(){
    return {
      posts: [
        {
          id: 1,
          title: 'This is a title one',
          description: 'This is a post title descirption'
        },
        {
          id: 2,
          title: 'This is a title TWO',
          description: 'This is a post title descirption'
        }
      ],
       user:'Md nuruzzaman Himel'
     
    }
  },
  //provide:{ user: this.user}
  //or
  provide(){
    return {
        user: computed(() => this.user),
    }
    
  },
  components:{
    compSInglePost,
    compSelectComponet
  },
  methods:{
    changeUserName(){
      this.user = "Change User Md Nuruzzaman Himel";
    },
    changeFirstTitle(key){
      this.posts[key].title = "This is the change first post title here Number of="+key;
    },
    
    onTitleChange(event){
      let index = this.posts.findIndex((post) => post.id == event.id);
      this.posts[index].title = event.title;
    }
  }
}
</script>