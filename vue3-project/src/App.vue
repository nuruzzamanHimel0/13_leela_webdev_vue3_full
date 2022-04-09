<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>POSTS</h2>
          <div class="my-4">
            <compSelectComponet
              data-status = '1'
              id="selectBox"
              @change="selectChange"
            ></compSelectComponet> 
          </div>
        
          <div v-for="(value, key) in posts" :key="key">
              <a href="" @click.prevent="changeFirstTitle(key)" >Change First Title here</a>
            <compSInglePost v-bind:postdata="value" :isActive="1" ></compSInglePost>
           
            <br>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>

 import compSInglePost from '@/components/singlePost.vue'

 import compSelectComponet from '@/components/selectComponent.vue'

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
    compSInglePost,
    compSelectComponet
  },
  methods:{
    changeFirstTitle(key){
      this.posts[key].title = "This is the change first post title here Number of="+key;
    },
    selectChange(event){
      console.log(event.target.value);
    }
  }
}
</script>