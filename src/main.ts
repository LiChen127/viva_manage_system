import { createApp } from "vue";
import "./assets/style/global.css";
import axios from './api/index';
import pinia from './stores/index';
import router from './routers/index';
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import App from './App.vue';
const app = createApp(App);

app.use(axios);
app.use(pinia);
app.use(router);
app.use(DatePicker);
app.mount('#app');
