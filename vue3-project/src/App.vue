<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>POSTS</h2>
          <a href="" @click.prevent="changeFirstTitle()" >Change First Title here</a>
          <div v-for="(value, key) in posts" :key="key">
            <compSInglePost v-bind:data="value" :isActive="1" ></compSInglePost>
            <br>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>

 import compSInglePost from '@/components/singlePost.vue'

export default {
  data(){
    return {
      posts: [
        {
          title: 'This is a title one',
          description: 'This is a post title descirption'
        },
        {
          title: 'This is a title TWO',
          description: 'This is a post title descirption'
        }
      ],
    }
  },
  components:{
    compSInglePost
  },
  methods:{
    changeFirstTitle(){
      this.posts[0].title = "This is the change first post title here";
    }
  }
}
</script>