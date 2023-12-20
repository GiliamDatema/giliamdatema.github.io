<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
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
