<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>POSTS</h2>
          <compSInglePost></compSInglePost>
          <hr>
          <compSInglePost></compSInglePost>
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
      ]
    }
  },
  components:{
    compSInglePost
  }
}
</script>