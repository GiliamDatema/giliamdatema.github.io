<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
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
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" module>
nav a:hover,
nav :global(a.router-link-active),
nav :global(a.router-link-exact-active) {
  background-color: grey;
  cursor: pointer;
}
</style>
