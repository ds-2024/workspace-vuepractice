// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap CSS 임포트
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap JS 임포트
import 'bootstrap';

createApp(App).use(router).mount('#app');

