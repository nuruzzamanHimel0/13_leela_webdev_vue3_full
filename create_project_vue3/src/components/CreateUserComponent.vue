<template>
    <div>
        <h1>User Create</h1>
        <form @submit.prevent="createUser()">
        <div class="form-group">
            <label for="userName">User Name</label>
            <input type="text" v-model="name" class="form-control" id="userName" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
         
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <hr>
     
    </div>
</template>

<script>
import axios from 'axios'
import {apiUrl} from '../helpers/urls/apiUrl.js'

export default {
    activated(){
        console.log('is actiavted');
    },
    deactivated() {
        console.log('is deactivated');
    },
    data(){
        return {
            name: null,
            email:null,
            password:null,
            allUsers:[],
            nessage:"This is HI message"
        }
    },
     mounted(){
        // this.getAllUsers();
        console.log('Mounted console');
    },
    computed:{
        // showAllUsers(){
        //     return this.allUsers;
        // }   
    },
    beforeRouteEnter(){
        
        console.log('In component Guard - beforeRotuteEnter');
       
    },
   

    beforeRouteLeave(){
         console.log('In component Guard - beforeRouteLeave');
        //  this.$router.push({name: "create-user"});
    },
    beforeRouteUpdate(){
        console.log('In component Guard - beforeRouteUpdate');
    },
    methods:{
        createUser(){
            if(this.name != null && this.email != null && this.password != null){
                  axios.post(apiUrl.CREATE_USER_POST_URL, {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    })
                    .then( (response) =>{
                        this.name = null ;
                        this.email = null;
                        this.password = null;
                        // this.getAllUsers();
                        alert(response.data.message);
                        this.$router.push({  name: 'user-details' });
                    })
                    .catch( (error)=> {
                        console.log(error);
                    });
            }else{
                alert("User Field can not empty");
            }
          
            console.log('form submit');
        },
       
    },
    components:{
       
    }
}
</script>