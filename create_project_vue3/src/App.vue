<template>
  <div>
    <h1>Post</h1>
    <ul>
      <li v-for="(value, key) in posts" :key="key" >
        {{ value.title }}
      </li>
    </ul>
    <hr>
    <single-post></single-post>
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
  components:{
    SinglePost
  }

}
</script>