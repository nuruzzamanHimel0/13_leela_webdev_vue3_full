<template>
    <div :class="[isActive == 1 ? 'bg-gray': 'bg-white' ]" class="p-2" >
        <h2>Single Post Child Component</h2>
        <ul>
            <div class="title">{{ compost.title }} </div>
            <div >{{ compost.description }} </div>
            <userPost  ></userPost>
            <a href="" @click.prevent="changeTitle()" > Change Title </a>
        </ul>
        <hr>
    </div>
</template>
<script>

import {Post} from '../services/PostService.js'

import userPost from '../components/PostUser.vue'

export default {
    //emit validaiton
    // emits:['changeTitle'],
    emits:{
        changeTitle: ( value ) =>{
            // if(value.id && value.title && value.description ){
            if(value instanceof Post ){
                console.log('valide emit');
                return true;
            }
            console.log('invalide emit');
            return false;
        },
    },
    // props:['data','isActive'],
    //porps validaiton ##############
    props:{
        data:{
            type:Object,
            required:false,
            default: function(){
                return {
                        title:'fist title DEFAULT',
                        description:'this is the DEFAULT first description'
                    };
            }
        },
        isActive:{
            type:Number,
            required:false,
            default:1,
            validator: function(value){
                return [1,0].includes(value)
            }
        },
        
    },
    data(){
        return {
           compost: {...this.data},
        }
    },
    methods:{
        changeTitle(){
            this.compost.title ="Change Post Title from child comp="+this.compost.id;
            const postData = new Post(
                this.compost.id,
                this.compost.title,
                this.compost.description,
            );
            this.$emit('changeTitle',postData);
        }
    },
    components:{
        userPost
    }
}
</script>

<style  scoped>

    .bg-gray{
        background-color: #ddd;
    }
    .bg-white{
        background-color: #fff;
    }
</style>