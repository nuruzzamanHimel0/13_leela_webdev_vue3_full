const app =  Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        title: 'this is a title',
        link:'https://vuejs.org/guide/quick-start.html',
      }
    }
  });
  app.mount('#app');