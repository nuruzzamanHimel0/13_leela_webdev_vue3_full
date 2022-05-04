<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                 <h2>All User</h2>
                <!-- {{ allUsers }} -->
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key) in allUsers" :key="key">
                            <th scope="row">{{key+1}}</th>
                            <td>{{value.name}}</td>
                            <td>{{value.email}}</td>
                            <td>
                                <router-link :to="{  name: 'user-single', params: {id: value.id} }" class="btn btn-primary">Single Post</router-link>
                            </td>
                        </tr>
                    
                    </tbody>
                    </table>
            </div>
            <div class="col-md-4">
                <div v-if="singeUser" class="stickydiv">
                    <h1>SIngel User</h1>
                    <p>Id: {{singeUser.id}}</p>
                    <p>name: {{singeUser.name}}</p>
                    <p>eamil: {{singeUser.email}}</p>
                </div>
            </div>
        </div>
      
    </div>
</template>
<script>
import axios from 'axios'
import {apiUrl} from '../helpers/urls/apiUrl.js'

export default {
    props:['id'],
    data(){
        return {
            // id:null,
            singeUser: null,
            allUsers:[]
        }
    },
    created(){
       
        this.getAllUsers();
        // this.$watch(
        // () => this.$route.params,
        //     () => {
        //          this.ShowsingeUser();
        //     }
        // ),
         this.ShowsingeUser();
    },
    watch:{
        id(){
            this.ShowsingeUser();
        }
    },
    methods:{
        ShowsingeUser(){
            // console.log(this.$route.params.id);
             axios.get(apiUrl.SINGLE_USERS_GET_URL+`${this.$route.params.id}`)
            .then( (response) => {
                this.singeUser = response.data.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },
         getAllUsers(){
            this.allUsers = [];
            axios.get(apiUrl.ALL_USERS_GET_URL)
            .then( (response) => {
                // handle success
                // this.allUsers = response.data.data.data;
                this.AllUserDetails(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },
        AllUserDetails(data){
            for(let key in data){
                this.allUsers.push({...data[key],key:key });
            }
        }
    }
}
</script>

<style scoped>
.stickydiv{
    position: sticky;
    top: 0;
}
</style>