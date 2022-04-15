<template>
    <div>
        <p>Post child component</p>
        <br>
        <ol>
            <li v-for="(value, key) in posts" :key="key" @click.prevent="clickPostList(value)" 
                :style="{'color': isActive == value.id ? 'green' : '' }"
            >
                {{ value.title }}
            </li>
        </ol>
        <hr>
        <div v-if="selectedPost">
            <h2>{{selectedPost.title}}</h2>
            <p>{{selectedPost.description}}</p>
        </div>
       
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            selectedPost:null,
            isActive: '',
            posts:[
                {
                    id:1,
                    title: 'This is the fist title',
                    description: 'This is the first title description'
                },
                {
                    id:2,
                    title: 'This is the Secound title',
                    description: 'This is the Secound title description'
                },
            ]
           
        }
    },
    activated(){
        this.hasOpenThisComp();
    },
    methods:{
        clickPostList(value){
          this.isActive = value.id;
          this.selectedPost = value;
        },
        hasOpenThisComp(){
            alert('open');
        }
    },
    components:{

    }

}
</script>

<style scoped>
    .active{
        color:green;
    }
</style>