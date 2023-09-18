import { createApp } from 'vue'
import Popper from 'vue3-popper'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
    locale: 'fr',
    legacy: false,
    messages: {
        en,
        fr
    }
})

createApp(App).component("Popper", Popper).use(i18n).mount('#app')
