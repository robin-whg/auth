import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

import { auth } from '@/firebase.js'

auth.onAuthStateChanged(() => {
    createApp(App).use(router).mount('#app')
})
