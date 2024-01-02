import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from '@/firebase'
import { VueFire } from 'vuefire' // TODO: import modules here

import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'

// Components and directives are registered below
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import ToggleButton from 'primevue/togglebutton'
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

/* eslint-disable vue/multi-word-component-names */
app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.component('ToggleButton', ToggleButton)

app.directive('tooltip', Tooltip)

app.mount('#app')
