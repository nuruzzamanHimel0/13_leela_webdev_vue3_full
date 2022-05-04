<template>
    <div>
        <h2>All User</h2>
        <!-- {{ allUsers }} -->
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) in allUsers" :key="key">
                    <th scope="row">{{key+1}}</th>
                    <td>{{value.name}}</td>
                    <td>{{value.email}}</td>
               
                </tr>
               
            </tbody>
            </table>
    </div>
</template>
<script>
import axios from 'axios'
import {apiUrl} from '../helpers/urls/apiUrl.js'
export default {
    data(){
        return {
            allUsers:[]
        }
    },
    mounted(){
        this.getAllUsers();
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