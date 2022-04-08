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
        },
        removeBtn(key){
            // this.hobbies.splice(key,1);
            // console.log(key);
            this.hobbies = this.hobbies.filter(function(value,index,arr){
                return index !== key;
            });
            // console.log(this.hobbies);
        }
    },
  });
  app.mount('#app');