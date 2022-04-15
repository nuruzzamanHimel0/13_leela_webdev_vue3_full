<template>
    <div>
        <div id="myModal">
            <div class="myModalInner">
                 <h3>This His My modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus inventore illo est molestias perspiciatis hic debitis omnis exercitationem animi laudantium? Quia dolore, in laudantium voluptatum assumenda nulla ullam commodi deleniti!</p>
                <!-- <a href="" @click.prevent="$emit('closemodal')">Close Modal</a> -->
                <a href="" @click.prevent="closemodal">Close Modal</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        closemodal(){
            this.$emit('closemodal',false);
        }
    }
}
</script>
<style scoped>
#myModal{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #00800047;
    z-index: 999;
     transition: all 2s
    /* opacity: 1, */
   
}
.myModalInner{
    width: 500px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    background-color: rgb(255, 255, 255);
    background-image: none;
    border: 5px none;
    border-top-color: currentcolor;
    border-right-color: currentcolor;
    border-bottom-color: currentcolor;
    border-left-color: currentcolor;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 12px;
    --darkreader-inline-bgcolor: #181a1b;
    --darkreader-inline-bgimage: none;
    --darkreader-inline-border-top: currentcolor;
    --darkreader-inline-border-right: currentcolor;
    --darkreader-inline-border-bottom: currentcolor;
    --darkreader-inline-border-left: currentcolor;
    box-shadow: 2px 4px 5px 3px red !important;
    --darkreader-inline-boxshadow: #cc0000 2px 4px 5px 3px;
}
#myModal a{
    background: blue;
    color: #fff;
    padding: 5px;
}
#myModal a:hover{
    background: red;
    color: #fff;
}
</style>