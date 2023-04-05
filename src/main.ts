import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$baseURL = 'https://django-estore.up.railway.app';

app.use(router)
app.mount('#app')
