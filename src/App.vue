<template>
  <header>
    <nav>
      <Menubar :model="items">
        <!-- <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink> -->
      </Menubar>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
// The `setup` attribute allows using Composition API inside SFCs.
// The code inside is compiled as the content of the component's setup() function,
// which will execute every time an instance of the component is created.
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { usePrimeVue } from 'primevue/config'
import Menubar from 'primevue/menubar'
import router from '@/router'

const PrimeVue = usePrimeVue()

const getPreferredColorScheme = () => {
  return window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}
const setColorScheme = (scheme) => {
  switch (scheme) {
    case 'dark':
      PrimeVue.changeTheme('lara-light-green', 'lara-dark-green', 'theme-link', () => {})
      break;
    case 'light':
      PrimeVue.changeTheme('lara-dark-green', 'lara-light-green', 'theme-link', () => {})
      break;
    default:
      break;
  }
}
const updateColorScheme = () => setColorScheme(getPreferredColorScheme())
const colorSchemeQuery = window?.matchMedia?.('(prefers-color-scheme: dark)')
colorSchemeQuery.addEventListener('change', updateColorScheme)
updateColorScheme()

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push({ name: 'home' })
    }
  },
  {
    label: 'About',
    command: () => {
      router.push({ name: 'about' })
    }
  }
])
</script>

<style lang="scss" module>

</style>
