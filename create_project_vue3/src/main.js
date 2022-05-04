import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.common['Accept'] = "application/json";
axios.defaults.headers.common['Content-Type'] = "application/json";
axios.defaults.headers.common['Himel'] = "My name is himel";

const app = createApp(App);

app.mount('#app');
