<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link :to="{ name: 'Home'}" class="nav-link" >Home </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'create-user'}" class="nav-link" href="#">Create User</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'user-details'}" class="nav-link" href="#">User Details</router-link>
                </li>
            </ul>
        </div>
        </nav>
    </div>
</template>
<style scoped>
.router-link-exact-active{
    background: green;
    color: #fff !important;
    border-radius: 5px;
}
</style>