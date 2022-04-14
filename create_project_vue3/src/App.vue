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
    <div v-for="(value, key) in posts" :key="key" >
      //componet
      <single-post :data="value" :isActive="1" ></single-post>
    </div>
  
  </div>
</template>

<script>

import SinglePost from './components/SinglePost.vue'

export default {
  data(){
    return {
      posts:[
        {
          title:'fist title',
          description:'this is the first description'
        },
        {
          title:'secound title',
          description:'this is the secound description'
        },
      ]
    }
  },
  methods:{
    changeParentFirstTitle(){
      this.posts[0].title ="Change Parent Component Fist Title";
    }
  },
  components:{
    SinglePost
  }

}
</script>