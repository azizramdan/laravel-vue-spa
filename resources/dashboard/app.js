import { createApp } from 'vue'
import routes from './router'

createApp()
    .use(routes)
    .component('navigation', require('./components/Navigation.vue').default)
    .mount('#app')