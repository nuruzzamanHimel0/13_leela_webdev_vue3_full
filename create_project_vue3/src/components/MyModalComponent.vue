<template>
    <div>
        <Teleport to="body" >
            <div class="mymodal-overlay" :class="{active:isActiveModal}"></div>
            <div class="mymodal" :class="{active:isActiveModal}">
                <h4>This is the modal</h4>
                <a href="" @click.prevent="$emit('closeModal',false)">Cancle</a>
            </div>
        </Teleport>
        
    </div>
</template>

<script>
export default {
    props:['isActiveModal'],
    methods:{
      
    }
}
</script>

<style scoped>
.mymodal-overlay{
    position: fixed;
    background: #0000007a;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all .5s;
    display: none;
}
.mymodal-overlay.active{
    display: block;
}
.mymodal{
    position: fixed;
    z-index: 9999;
    background: #fff;
    width: 50%;
    padding: 10px;
    text-align: center;
    transition: all .5s;
    height: 100px;
    transform: translate(-50%,-50%);
    top: -50%;
    left: 50%;
}
.mymodal.active{
    top: 50%;
    left: 50%;
}
.mymodal h4{
    margin-bottom: 17px;
}
.mymodal a{
    background: #ddd;
    padding: 10px;
    color: #000;
    border: 1px solid #000;
}
.mymodal a:hover{
    color:#fff;
    background: #000;
}
</style>