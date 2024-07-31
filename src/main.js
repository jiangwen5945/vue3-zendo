import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Directive from './directives'

const app = createApp(App)
app.use(Directive)

app.use(createPinia())
app.use(router)

app.mount('#app')
