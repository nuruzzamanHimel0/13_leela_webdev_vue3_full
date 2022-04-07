const app =  Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        title: 'this is a title',
        link:'https://vuejs.org/guide/quick-start.html',
        html: '<h2> This is HTML  </h2>',
        name:null,
      }
    },
    methods: {
        getHtml(){
            return this.html;
        },
        setName(event,arg){
            this.name = event.target.value + arg;
            // console.log(event.target);
        }
    },
  });
  app.mount('#app');