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
        submitHobbies(){
            this.hobbies.push(this.hobbiesInput);
            this.hobbiesInput = "";
        }
    },
  });
  app.mount('#app');