const app =  Vue.createApp({
    data() {
      return {
       name:'Nuruzzaman Himel',
       count:0,
       fullname:'',
      }
    },
    watch:{
      name(value){
        this.fullname = value;
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