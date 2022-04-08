const app =  Vue.createApp({
    data() {
      return {
        hobbies:[],
        hobbiesInput:'',
      }
    },
    watch:{
      
    },
    computed:{
      
    },
    methods: {
        submitBtn(){
            this.hobbiesInput = this.$refs.userText.value;
        //    console.dir(this.$refs.userText.value);
        },
     
    },
  });
  app.mount('#app');