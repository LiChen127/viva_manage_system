import { createApp } from "vue";
import "./assets/style/global.css";
import axios from './api/index';
import pinia from './store/index';
import router from './routers/index';

import App from './App.vue';
const app = createApp(App);

app.use(axios);
app.use(pinia);
app.use(router);

app.mount('#app');
