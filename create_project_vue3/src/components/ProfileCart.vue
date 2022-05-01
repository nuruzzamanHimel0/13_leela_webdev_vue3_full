<template>
    <div class="">
     
            <div class="card">
                <div class="card-body">
                    <div class="header" v-if="$slots.header">
                        <slot name="header">
                            <!-- default slot Header -->
                            
                        </slot>
                    </div>
                    <div class="content">
                        <slot name="content">
                              <!-- default slot content -->
                              <h4>Default content Is Here</h4>
                        </slot>
                    </div>
                    <div class="footer">
                        <slot name="footer">
                             <!-- default slot footer -->
                              <h5>Default footer Is Here</h5>
                        </slot>
                    </div>
                </div>
            </div>  

    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$slots);
    }
}
</script>
<style scoped>
    .header{
        height:120px;
        background: red;
        color: #fff;
        padding: 5px;
    }
</style>