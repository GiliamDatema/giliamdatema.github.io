<template>
  <nav>
    <Menubar :model="items" class="flex gap-5 mb-5">
      <template #start>
        <span v-text="`Giliam Datema`" :class="$style.title" />
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
          <InputText
            v-tooltip.focus.bottom="'Find a recipe by name, ingredients / keywords'"
            placeholder="Search"
            type="text"
            class="w-8rem sm:w-auto"
          />
          <ToggleButton
            v-model="darkMode"
            onIcon="pi pi-moon text-700"
            offIcon="pi pi-sun text-700"
            onLabel=""
            offLabel=""
            class="flex flex-shrink-0 border-1 border-solid w-2rem h-2rem
              surface-border border-round hover:border-primary surface-100
              align-items-center justify-content-center transition-all
              transition-duration-300"
            :class="$style['color-scheme-toggle']"
          />
        </div>
      </template>
    </Menubar>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useColorScheme } from '@/composables/color-scheme.js'
import { usePrimeVue } from 'primevue/config'

const PrimeVue = usePrimeVue()
const darkMode = useColorScheme(PrimeVue)

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: { name: 'home' }
  },
  {
    label: 'Recipes',
    icon: 'pi pi-book',
    route: { name: 'recipes' }
  },
  {
    label: 'Favourites',
    icon: 'pi pi-bookmark',
    route: { name: 'favourites' }
  }
])
</script>

<style lang="scss" module>
.title {
  bottom: -.4rem;
  font-family: BadScript, sans-serif;
  font-size: 4.6rem;
  line-height: 1rem;
  margin: 0 1rem;
  position: relative;
}
.color-scheme-toggle {
  box-shadow: none;
}
</style>
