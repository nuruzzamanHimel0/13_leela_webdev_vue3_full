<template>
  <div>
    <h1>Post Main Component</h1>
    <a href="" @click.prevent="changeParentFirstTitle()" >Change Parent Fist Title</a>
    <ul>
      <li v-for="(value, key) in posts" :key="key" >
        {{ value.title }}
      </li>
    </ul>
    <hr>
    <h2>Tut 34: Provide/Inject:</h2>

    <p>{{ user }}</p>
    <a href="" class="btn btn-success" @click.prevent="changeUser()" >Change User Name</a>
    <hr>
    <div v-for="(value, key) in posts" :key="key" >
      //componet
      <single-post :data="value" :isActive="1"
       
        @changeTitle="onChangeTitle($event)"
       ></single-post>
    </div>
  
  </div>
</template>

<script>

import SinglePost from './components/SinglePost.vue'
//provide/inject
import { computed } from 'vue'

export default {
  data(){
    return {
      posts:[
        {
          id:1,
          title:'fist title',
          description:'this is the first description'
        },
        {
           id:2,
          title:'secound title',
          description:'this is the secound description'
        },
      ],
      user:"Nuruzzaman Himel",
    }
  },
  // provide:{
  //   user:"Nuruzzaman Himel",
  // },
  provide(){
    return {
        // user:this.user,
        user: computed(() => this.user),
        changeUserChild : this.changeUser
    }
  },
  methods:{
    changeUser(valUser){
      if(valUser){
        this.user = valUser;
      }else{
        this.user = "Change User name is: Md Nuruzzaman";
      }
    },
    changeParentFirstTitle(){
      this.posts[0].title ="Change Parent Component Fist Title";
    },
    onChangeTitle(event){
      let index = this.posts.findIndex((post) => post.id == event.id );
      this.posts[index].title = event.title;
      this.posts[index].description = event.description;
        
      // console.log(index);
    },
    
  },
  components:{
    SinglePost
  }

}
</script>