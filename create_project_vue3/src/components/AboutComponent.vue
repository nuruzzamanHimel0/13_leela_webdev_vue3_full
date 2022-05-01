<template>
    <div>
        <h1>About Component</h1>
        <ul>
            
            <li v-for="(value, key) in posts" :key="key" >
                <p  @click.prevent="clickList(value)"
                    :class="{active:isActiveList==value.id}"
                 >{{value.title}}</p>
            </li>
        </ul>

        <div class="card" v-if="selectPost">
            <div class="card-body">
                <h3>{{selectPost.title}}</h3>
                <h3>{{selectPost.description}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            posts: [
                {
                    id:1,
                    title: 'THis  is a first title',
                    description: 'THis  is a first titleTHis  is a first titleTHis  is a first titleTHis  is a first titleTHis  is a first titleTHis  is a first title THis  is a first titleTHis  is a first titleTHis  is a first titleTHis  is a first titleTHis  is a first titleTHis  is a first title'
                },
                {
                    id:2,
                    title: 'THis  is a secound title',
                    description: 'THis  is a secound titleTHis  is a secound titleTHis  is a secound titleTHis  is a secound titleTHis  is a secound titleTHis  is a secound title THis  is a secound titleTHis  is a secound titleTHis  is a secound titleTHis  is a secound titleTHis  is a secound titleTHis  is a secound title'
                },
                {
                    id:3,
                    title: 'THis  is a thired title',
                    description: 'THis  is a thired titleTHis  is a thired titleTHis  is a thired titleTHis  is a thired titleTHis  is a thired titleTHis  is a thired title THis  is a thired titleTHis  is a thired titleTHis  is a thired titleTHis  is a thired titleTHis  is a thired titleTHis  is a thired title'
                },
                {
                    id:4,
                    title: 'THis  is a fourth title',
                    description: 'THis  is a fourth titleTHis  is a fourth titleTHis  is a fourth titleTHis  is a fourth titleTHis  is a fourth titleTHis  is a fourth title THis  is a fourth titleTHis  is a fourth titleTHis  is a fourth titleTHis  is a fourth titleTHis  is a fourth titleTHis  is a fourth title'
                },
            ],
            isActiveList:null,
            selectPost:null,
        }
    },
    methods:{
        clickList(value){
            this.isActiveList = value.id;
            this.selectPost = value;
        }
    }
}
</script>
<style scoped>
    .active{
        color:green;
    }
</style>