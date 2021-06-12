import { createApp } from 'vue'
import router from '@/router/index'
import atomicDesign from '@/plugins/atomicDesign'
import App from './App.vue'
import './index.css'

createApp(App).use(router).use(atomicDesign).mount('#app')
