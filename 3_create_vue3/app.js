const app =  Vue.createApp({
    data() {
      return {
        boxNumberOne:null,
        boxNumberTwo:null,
        boxNumberThree:null,
      }
    },
    watch:{
      
    },
    computed:{
      
    },
    methods: {
        boxColorChange(arg){
            if(arg == 1){
                if(this.boxNumberOne != null){
                    this.boxNumberOne = null;
                }else{
                    this.boxNumberOne = 1;
                }
               
            }else if(arg == 2){
                if(this.boxNumberTwo != null){
                    this.boxNumberTwo = null;
                }else{
                    this.boxNumberTwo = 2;
                }
          
            }
            else if(arg == 3){
                if(this.boxNumberThree != null){
                    this.boxNumberThree = null;
                }else{
                    this.boxNumberThree = 3;
                }
               
            }
        }
    },
  });
  app.mount('#app');