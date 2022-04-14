<template>
    <div :class="[isActive == 1 ? 'bg-gray': 'bg-white' ]" class="p-2" >
        <h2>Single Post Child Component</h2>
        <ul>
            <div class="title">{{ compost.title }} </div>
            <div >{{ compost.description }} </div>
            <a href="" @click.prevent="changeTitle()" > Change Title </a>
        </ul>
        <hr>
    </div>
</template>
<script>
export default {
    //emit validaiton
    // emits:['changeTitle'],
    emits:{
        changeTitle: ( value ) =>{
            if(value.id && value.title && value.description ){
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
        postData:{
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
        }
    },
    data(){
        return {
           compost: {...this.postData},
        }
    },
    methods:{
        changeTitle(){
            this.compost.title ="Change Post Title from child comp="+this.compost.id;
            this.$emit('changeTitle',this.compost);
        }
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