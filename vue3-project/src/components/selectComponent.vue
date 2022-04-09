<template>
    <div>
        <select name="" id="" v-bind="$attrs">
            <option value="">Selected</option>
            <option value="1">1</option>
        </select>
    </div>
</template>

<script>
export default {
    inheritAttrs:false,
    data(){
        return {
            
        }
    },
    mounted(){
        console.log(this.$attrs);
    }
}
</script>