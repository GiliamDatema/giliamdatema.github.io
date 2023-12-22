<template>
  <header>
    <nav>
      <Menubar :model="items" class="flex gap-5 mb-5">
        <template #start>
          <span v-text="`Giliam's Recipes`" :class="$style.title" />
        </template>
        <template #item="{ item, props }">
          <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span v-if="item.icon" :class="item.icon" />
              <span :class="{ 'ml-2': item.icon }">{{ item.label }}</span>
            </a>
          </RouterLink>
        </template>
        <template #end>
          <div class="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
          </div>
        </template>
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
import InputText from 'primevue/inputtext'
import router from '@/router'

const PrimeVue = usePrimeVue()

const getPreferredColorScheme = () => {
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
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
const colorSchemeQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
colorSchemeQuery.addEventListener('change', updateColorScheme)
updateColorScheme()

const items = ref([
  {
    label: 'Recipes',
    icon: 'pi pi-book',
    route: { name: 'home' }
    // command: () => {
    //   router.push({ name: 'home' })
    // }
  },
  {
    label: 'Favourites',
    icon: 'pi pi-bookmark',
    route: { name: 'bookmarks' }
    // command: () => {
    //   router.push({ name: 'about' })
    // }
  }
])
</script>

<style lang="scss" module>
.title {
  font-family: 'BadScript';
  font-size: 4.6rem;
  line-height: 1rem;
  position: relative;
  bottom: -.4rem;
  margin: 0 1rem;
}
</style>
