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

export default {
    props:['allUsers'],
    data(){
        return {
           
        }
    },
    mounted(){
 
    },
    methods:{
        
    }
}
</script>