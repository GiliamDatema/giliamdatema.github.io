import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from '@/firebase'
import { VueFire } from 'vuefire' // TODO: import modules here

import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [
    // TODO: add modules here
  ]
})
app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.directive('tooltip', Tooltip)

app.mount('#app')
