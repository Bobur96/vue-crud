<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div class="App">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.App{
  width: 100%;
  height: 100%;
}

</style>
