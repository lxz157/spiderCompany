// 4.22 import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import router from '@/router' // 2025.4.22 默认找到的是index.js文件
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(router)

app.mount('#app')
