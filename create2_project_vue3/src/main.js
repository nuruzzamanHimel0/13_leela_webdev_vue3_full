import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faUser, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone, faUser, faStar);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app');
