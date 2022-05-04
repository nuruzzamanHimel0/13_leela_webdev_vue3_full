<template>
    <div class="stickydiv">
        <div class="singleUser " v-if="singeUser">
            <h1>SIngel User IN Router view</h1>
            <p>Id: {{singeUser.id}}</p>
            <p>name: {{singeUser.name}}</p>
            <p>eamil: {{singeUser.email}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {apiUrl} from '@/helpers/urls/apiUrl'

export default {
    data(){
        return {
            singeUser: null,
        }
    },
    created(){
        this.$watch(
            () => this.$route.params,
            () => {
                this.ShowsingeUser();
            }
        ),
         this.ShowsingeUser();
    },
    methods:{
        ShowsingeUser(){
            // console.log(this.$route.params.id);
            if(this.$route.params.id){
                axios.get(apiUrl.SINGLE_USERS_GET_URL+`${this.$route.params.id}`)
                .then( (response) => {
                    this.singeUser = response.data.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
            }
             
          
        },
    }
}
</script>
<style scoped>
.stickydiv{
    position: sticky;
    top: 0;
}
</style>