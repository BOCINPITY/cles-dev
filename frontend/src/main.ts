import './assets/main.css'
import './assets/iconfont/iconfont.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKonva from 'vue-konva'
const app = createApp(App)

app.use(router)
app.use(VueKonva)
app.mount('#app')
