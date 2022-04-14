const app =  Vue.createApp({
    data() {
      return {
        userWriteText:'',
      }
    },
    methods: {
      setText(){
        console.log(this.$refs.userText.value);
        this.userWriteText = this.$refs.userText.value;
      }
    },
  });
  app.mount('#app');