import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// micro-app
import microApp from '@micro-zoe/micro-app';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Button from './components/Button.vue';

microApp.start();

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.component('Button', Button);

app.mount('#app');
