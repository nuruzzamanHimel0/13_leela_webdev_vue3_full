const app =  Vue.createApp({
    data() {
      return {
        boxA:'',
        boxB:'',
        boxC:'',
        allbox:['A','B','C'],
      }
    },
    methods: {
      changeColor(value){
        const boxval = this.allbox.find(element => element == value) ;
        if(boxval == 'A'){
          this.boxA = this.boxA != true ? true : false; 
        }else if(boxval == 'B'){
          this.boxB = this.boxB != true ? true : false; 
        }else if(boxval == 'C'){
          this.boxC = this.boxC != true ? true : false; 
        }
      }
    },
  });
  app.mount('#app');