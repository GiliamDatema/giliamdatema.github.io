<template>
  <header>
    <NavBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
// The `setup` attribute allows using Composition API inside SFCs.
// The code inside is compiled as the content of the component's setup() function,
// which will execute every time an instance of the component is created.
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<style lang="scss" module>

</style>
