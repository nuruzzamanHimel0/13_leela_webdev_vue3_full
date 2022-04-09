<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2>POSTS</h2>

             <hr>
            <h1>Provider /Inject</h1> <br>
            <p>App  User: {{user}}</p>
            <a href="" class="btn btn-light"
              @click.prevent="changeUserName('Update User MD Nuruzzaman')"
            >Change user name</a>
            <hr>
      
          <div v-for="(value, key) in posts" :key="key" >
             <a href="" class="btn btn-danger"
            @click.prevent="changeParentComFirstTitle(key)"
            >Change APP Parent Post Fist TItle</a>

            <compSinglePost
              :data="value"
              :isActive="isActive"

              @titlechanged ="childToParTitleChng($event)"

            ></compSinglePost>

          </div>

         
        </div>
        <div class="col-md-4">
          <h2>Latest Post:</h2>
          <ul class="mt-2 list-group">
            <li class="list-group-item" v-for="(value, key) in posts" :key="key" >
              {{ value.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import compSinglePost from '@/components/singlePost.vue'

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
       user:'Md nuruzzaman Himel',
       isActive : 1
     
    }
  },
  provide(){
    return {
      user: computed(()=>this.user) ,
      updateParentUsr: this.changeUserName
    }
  },
  
  components:{
    compSinglePost
  },
  methods:{
    changeUserName(value){
      if(value.name){
        this.user = value.name;
      }else{

        this.user = value;
      }
    },
    changeParentComFirstTitle(key){
      this.posts[key].title = "App Componet Post Title Change ="+key;
    },
    childToParTitleChng(event){
      const index = this.posts.findIndex((post) => post.id == event.id );
      this.posts[index].title = event.title;
      // console.log(index);
    }
  }
}
</script>