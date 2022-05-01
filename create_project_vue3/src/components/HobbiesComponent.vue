<template>
    <div>
      <ul class="list-group">
            <li class="list-group-item" v-for="(value, key) in hobbies" :key="key" >
                <slot :hobbies="value" ></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hobbies:['gardening','playing cricket','cycling','reading poem']
        }
    }
}
</script>