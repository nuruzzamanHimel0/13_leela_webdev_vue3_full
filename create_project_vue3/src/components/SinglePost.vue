<template>
    <div>
        <h2>Single Post Component</h2>
        <ul>
            <li v-for="(value, key) in post" :key="key" >
                {{ value.title }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            post: [
            {
                title:' single post title',
                description: 'sisngle post descriptn'
            }
            ]
        }
    }
}
</script>