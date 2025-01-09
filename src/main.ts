import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const moja_tema: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#ff6a00',
    },
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "moja_tema",
        themes: {
            moja_tema
        }
    },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
