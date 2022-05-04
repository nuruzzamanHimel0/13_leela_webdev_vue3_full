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
                                <router-link :to="{  name: 'user-single', params: {id: value.id} }" class="btn btn-primary">Redirect Single Post</router-link>
                                <router-link :to="{  name:'side-single-user', params: {id: value.id} }" class="btn btn-danger"> Single Post in All Posts</router-link>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">
              
                <div v-if="paramsId == null">
                    <h1>There have no post. Click Button for show post</h1>
                </div>
                <router-view></router-view>
            </div>
        </div>
      
    </div>
</template>
<script>
import axios from 'axios'
import {apiUrl} from '../helpers/urls/apiUrl.js'
export default {
    data(){
        return {
            allUsers:[],
            singeUser: null,
            paramsId: this.$route.params.id ? this.$route.params.id : null
        }
    },
    mounted(){
        this.getAllUsers();
    },
    created(){
         this.$watch(
        () => this.$route.params,
            () => {
                // react to route changes...
                this. paramsId =this.$route.params.id ? this.$route.params.id : null;
            }
        )
       
    },
    methods:{
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