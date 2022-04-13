const app =  Vue.createApp({
    data() {
      return {
       name:'Nuruzzaman Himel',
       count:0,
      }
    },
    computed:{
      outputFullName(){
        console.log('executive full name');
        return this.name+' '+' Full name';
      }
    },
    methods: {
      
    },
  });
  app.mount('#app');